import { Writer, Reader } from "as-proto";

export namespace kite {
  export namespace deployments {
    export namespace v1 {
      @unmanaged
      export class DeploymentSettings {
        static encode(message: DeploymentSettings, writer: Writer): void {}

        static decode(reader: Reader, length: i32): DeploymentSettings {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new DeploymentSettings();

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
