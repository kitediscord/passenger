// @generated
pub mod kite {
    pub mod actions {
        #[cfg(feature = "kite_actions_v1")]
        // @@protoc_insertion_point(attribute:kite.actions.v1)
        pub mod v1 {
            include!("kite.actions.v1.rs");
            // @@protoc_insertion_point(kite.actions.v1)
        }
    }
    pub mod deployments {
        #[cfg(feature = "kite_deployments_v1")]
        // @@protoc_insertion_point(attribute:kite.deployments.v1)
        pub mod v1 {
            include!("kite.deployments.v1.rs");
            // @@protoc_insertion_point(kite.deployments.v1)
        }
    }
    pub mod discord {
        #[cfg(feature = "kite_discord_v1")]
        // @@protoc_insertion_point(attribute:kite.discord.v1)
        pub mod v1 {
            include!("kite.discord.v1.rs");
            // @@protoc_insertion_point(kite.discord.v1)
        }
    }
    pub mod events {
        #[cfg(feature = "kite_events_v1")]
        // @@protoc_insertion_point(attribute:kite.events.v1)
        pub mod v1 {
            include!("kite.events.v1.rs");
            // @@protoc_insertion_point(kite.events.v1)
        }
    }
}