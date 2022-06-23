import { Writer, Reader } from "as-proto";

export namespace kite {
  export namespace settings {
    export namespace v1 {
      @unmanaged
      export class PluginSettings {
        static encode(message: PluginSettings, writer: Writer): void {}

        static decode(reader: Reader, length: i32): PluginSettings {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new PluginSettings();

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
    }
  }
}
