// @generated
pub mod kite {
    pub mod v1 {
        #[cfg(feature = "kite_v1_actions")]
        // @@protoc_insertion_point(attribute:kite.v1.actions)
        pub mod actions {
            include!("kite.v1.actions.rs");
            // @@protoc_insertion_point(kite.v1.actions)
        }
        #[cfg(feature = "kite_v1_discord")]
        // @@protoc_insertion_point(attribute:kite.v1.discord)
        pub mod discord {
            include!("kite.v1.discord.rs");
            // @@protoc_insertion_point(kite.v1.discord)
        }
        #[cfg(feature = "kite_v1_events")]
        // @@protoc_insertion_point(attribute:kite.v1.events)
        pub mod events {
            include!("kite.v1.events.rs");
            // @@protoc_insertion_point(kite.v1.events)
        }
    }
}