// @generated
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Event {
    #[prost(enumeration="EventGroup", tag="1")]
    pub group: i32,
    #[prost(oneof="event::Event", tags="2")]
    pub event: ::core::option::Option<event::Event>,
}
/// Nested message and enum types in `Event`.
pub mod event {
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Event {
        #[prost(message, tag="2")]
        Init(super::InitEvent),
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InitEvent {
    #[prost(message, optional, tag="1")]
    pub settings: ::core::option::Option<super::super::deployments::v1::DeploymentSettings>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum EventGroup {
    Unspecified = 0,
    Init = 1,
}
// @@protoc_insertion_point(module)
