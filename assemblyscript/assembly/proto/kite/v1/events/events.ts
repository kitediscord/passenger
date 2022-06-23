import { Writer, Reader } from "as-proto";

export namespace kite {
  export namespace v1 {
    export namespace events {
      @unmanaged
      export class Event {
        static encode(message: Event, writer: Writer): void {
          writer.uint32(8);
          writer.int32(message.group);

          const init = message.init;
          if (init !== null) {
            writer.uint32(18);
            writer.fork();
            kite.v1.events.InitEvent.encode(init, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): Event {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new Event();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.group = reader.int32();
                break;

              case 2:
                message.init = kite.v1.events.InitEvent.decode(
                  reader,
                  reader.uint32()
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        group: kite.v1.events.EventGroup;
        init: kite.v1.events.InitEvent | null;

        constructor(
          group: kite.v1.events.EventGroup = 0,
          init: kite.v1.events.InitEvent | null = null
        ) {
          this.group = group;
          this.init = init;
        }
      }

      @unmanaged
      export class InitEvent {
        static encode(message: InitEvent, writer: Writer): void {}

        static decode(reader: Reader, length: i32): InitEvent {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new InitEvent();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        constructor() {}
      }

      export enum EventGroup {
        EVENT_GROUP_UNSPECIFIED = 0,
        EVENT_GROUP_INIT = 1,
      }
    }
  }
}
