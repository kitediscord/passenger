pub use proto::kite::*;
use prost::Message;

mod proto;
mod sys;

pub fn get_event(size: usize) -> v1::events::Event {
    let mut buf = vec![0; size];
    unsafe { sys::_kite_get_event(buf.as_mut_ptr()) };
    v1::events::Event::decode(buf.as_slice()).expect("Decoding event")
}

pub fn perform_action(action: v1::actions::Action) -> v1::actions::ActionResponse {
    let req_buf = action.encode_to_vec();
    let resp_size = unsafe { sys::_kite_perform_action(req_buf.as_ptr(), req_buf.len()) };

    let mut resp_buf = vec![0; resp_size];
    unsafe {
        sys::_kite_get_action_response(resp_buf.as_mut_ptr());
    }

    v1::actions::ActionResponse::decode(resp_buf.as_slice()).expect("Decoding action response")
}
