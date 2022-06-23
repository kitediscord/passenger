import { Writer, Reader } from "as-proto";
import { kite as kite_2 } from "./kite/deployments/v1/settings";

export namespace kite {
  export namespace events {
    export namespace v1 {
      @unmanaged
      export class Event {
        static encode(message: Event, writer: Writer): void {
          writer.uint32(8);
          writer.int32(message.group);

          const init = message.init;
          if (init !== null) {
            writer.uint32(18);
            writer.fork();
            kite.events.v1.InitEvent.encode(init, writer);
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
                message.init = kite.events.v1.InitEvent.decode(
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

        group: kite.events.v1.EventGroup;
        init: kite.events.v1.InitEvent | null;

        constructor(
          group: kite.events.v1.EventGroup = 0,
          init: kite.events.v1.InitEvent | null = null
        ) {
          this.group = group;
          this.init = init;
        }
      }

      @unmanaged
      export class InitEvent {
        static encode(message: InitEvent, writer: Writer): void {
          const settings = message.settings;
          if (settings !== null) {
            writer.uint32(10);
            writer.fork();
            kite_2.deployments.v1.DeploymentSettings.encode(settings, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): InitEvent {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new InitEvent();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.settings =
                  kite_2.deployments.v1.DeploymentSettings.decode(
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

        settings: kite_2.deployments.v1.DeploymentSettings | null;

        constructor(
          settings: kite_2.deployments.v1.DeploymentSettings | null = null
        ) {
          this.settings = settings;
        }
      }

      export enum EventGroup {
        EVENT_GROUP_UNSPECIFIED = 0,
        EVENT_GROUP_INIT = 1,
      }
    }
  }
}
