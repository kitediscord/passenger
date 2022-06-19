import { Writer, Reader } from "as-proto";

export namespace kite {
  export namespace v1 {
    export namespace actions {
      @unmanaged
      export class Action {
        static encode(message: Action, writer: Writer): void {
          writer.uint32(9);
          writer.fixed64(message.id);
        }

        static decode(reader: Reader, length: i32): Action {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new Action();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.id = reader.fixed64();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        id: i64;

        constructor(id: i64 = 0) {
          this.id = id;
        }
      }

      @unmanaged
      export class ActionResponse {
        static encode(message: ActionResponse, writer: Writer): void {
          writer.uint32(9);
          writer.fixed64(message.id);
        }

        static decode(reader: Reader, length: i32): ActionResponse {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new ActionResponse();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.id = reader.fixed64();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        id: i64;

        constructor(id: i64 = 0) {
          this.id = id;
        }
      }
    }
  }
}
