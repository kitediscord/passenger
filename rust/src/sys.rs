extern crate wee_alloc;

extern "C" {
    // Instructs the host to write the current event to the pointer
    // The size is known from the argument of _kite_handle_event
    pub fn _kite_get_event(ptr: *const u8);

    // tells the host to perform an action
    // the host can read the action from the ptr + size
    // the host returns the size of the action result (0 if no response)
    pub fn _kite_perform_action(ptr: *const u8, size: usize) -> usize;
    // Instructs the host to write the current action response to the pointer
    // the size is known from the return of _kite_perform_action
    pub fn _kite_get_action_response(ptr: *mut u8);
}

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
