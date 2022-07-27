import * as schemawax from 'schemawax';

type FooBarBaz = 'foo' | 'bar' | 'baz'

const fooBarBazDecoder: schemawax.Decoder<FooBarBaz> =
    schemawax.literalUnion('foo', 'bar', 'baz');
