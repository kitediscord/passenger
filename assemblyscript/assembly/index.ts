import { Protobuf } from "as-proto/assembly/index";
import { kite_plugin_events } from "./proto";

export * from "./proto";

export declare function _kite_get_event(ptr: usize): void;

export declare function _kite_perform_action(ptr: usize, size: usize): usize;

export declare function _kite_get_action_response(ptr: usize): void;

export function getEvent(size: usize): kite_plugin_events.Event {
  const buf = new Uint8Array(size);

  _kite_get_event(buf.dataStart);

  return Protobuf.decode<kite_plugin_events.Event>(
    buf,
    kite_plugin_events.Event.decode
  );
}

export function performAction(
  action: kite_plugin_events.Action
): kite_plugin_events.ActionResponse {
  const reqBuf = Protobuf.encode(action, kite_plugin_events.Action.encode);
  let resSize = _kite_perform_action(reqBuf.dataStart, reqBuf.byteLength);

  let respBuf = new Uint8Array(resSize);
  _kite_get_action_response(respBuf.dataStart);

  return Protobuf.decode<kite_plugin_events.ActionResponse>(
    respBuf,
    kite_plugin_events.ActionResponse.decode
  );
}
