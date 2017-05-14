
export enum HTTPInformational {
	Continue = 100,
	SwitchingProtocols,
	Processing
}
export enum HTTPSuccess {
	OK = 200,
	Created,
	Accepted,
	NonAuthoritativeInformation,
	NoContent,
	ResetContent,
	PartialContent,
	MultiStatus,
	AlreadyReported,
	IMUsed = 226,
}
export enum HTTPRedirection {
	MultipleChoices = 300,
	MovedPermanently,
	Found,
	SeeOther,
	NotModified,
	UseProxy,
	SwitchProxy,
	TemporaryRedirect,
	PermanentRedirect,
}
export enum HTTPClientErr {
	BadRequest = 400,
	Unauthorized,
	PaymentRequired,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	NotAcceptable,
	ProxyAuthenticationRequired,
	RequestTimeout,
	Conflict,
	Gone,
	LengthRequired,
	PreconditionFailed,
	PayloadTooLarge,
	URITooLong,
	UnsupportedMediaType,
	RangeNotSatisfiable,
	ExpectationFailed,
	ImATeapot,
	MisdirectedRequest = 421,
	UnprocessableEntity,
	Locked,
	FailedDependency,
	UpgradeRequired = 426,
	PreconditionRequired = 428,
	TooManyRequests,
	RequestHeaderFieldsTooLarge = 431,
	UnavailableForLegalReasons = 451,
}
export enum HTTPServerErr {
	InternalServerError = 500,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,
	NotExtended = 510,
	NetworkAuthenticationRequired
}

export enum HTTPCustomErr {
	ValidationFailed = 1000,
	NoPermission
}