// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "buyback.proto" (package "buyback_proto", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Struct } from "./google/protobuf/struct";
/**
 * @generated from protobuf message buyback_proto.ReqItem
 */
export interface ReqItem {
    /**
     * @generated from protobuf field: uint32 type_id = 1;
     */
    typeId: number;
    /**
     * @generated from protobuf field: uint32 quantity = 2;
     */
    quantity: number;
}
/**
 * @generated from protobuf message buyback_proto.BuyReq
 */
export interface BuyReq {
    /**
     * @generated from protobuf field: repeated buyback_proto.ReqItem items = 1;
     */
    items: ReqItem[];
    /**
     * @generated from protobuf field: string language = 2;
     */
    language: string;
    /**
     * @generated from protobuf field: string location = 3;
     */
    location: string;
}
/**
 * @generated from protobuf message buyback_proto.CheckReq
 */
export interface CheckReq {
    /**
     * @generated from protobuf field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from protobuf field: string language = 2;
     */
    language: string;
}
/**
 * @generated from protobuf message buyback_proto.RepItem
 */
export interface RepItem {
    /**
     * @generated from protobuf field: uint32 type_id = 1;
     */
    typeId: number;
    /**
     * @generated from protobuf field: uint32 parent_type_id = 2;
     */
    parentTypeId: number;
    /**
     * @generated from protobuf field: double quantity = 3;
     */
    quantity: number;
    /**
     * @generated from protobuf field: string name = 4;
     */
    name: string;
    /**
     * @generated from protobuf field: double price_per = 5;
     */
    pricePer: number;
    /**
     * @generated from protobuf field: string description = 6;
     */
    description: string;
    /**
     * @generated from protobuf field: bool accepted = 7;
     */
    accepted: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Struct meta = 8;
     */
    meta?: Struct;
}
/**
 * @generated from protobuf message buyback_proto.Rep
 */
export interface Rep {
    /**
     * @generated from protobuf field: repeated buyback_proto.RepItem items = 1;
     */
    items: RepItem[];
    /**
     * @generated from protobuf field: string hash = 2;
     */
    hash: string;
    /**
     * @generated from protobuf field: double sum = 3;
     */
    sum: number;
    /**
     * @generated from protobuf field: uint64 timestamp = 4;
     */
    timestamp: bigint;
    /**
     * @generated from protobuf field: string version = 5;
     */
    version: string;
    /**
     * @generated from protobuf field: string location = 6;
     */
    location: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ReqItem$Type extends MessageType<ReqItem> {
    constructor() {
        super("buyback_proto.ReqItem", [
            { no: 1, name: "type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReqItem>): ReqItem {
        const message = { typeId: 0, quantity: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReqItem>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReqItem): ReqItem {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 type_id */ 1:
                    message.typeId = reader.uint32();
                    break;
                case /* uint32 quantity */ 2:
                    message.quantity = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ReqItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 type_id = 1; */
        if (message.typeId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.typeId);
        /* uint32 quantity = 2; */
        if (message.quantity !== 0)
            writer.tag(2, WireType.Varint).uint32(message.quantity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message buyback_proto.ReqItem
 */
export const ReqItem = new ReqItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyReq$Type extends MessageType<BuyReq> {
    constructor() {
        super("buyback_proto.BuyReq", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReqItem },
            { no: 2, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "location", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BuyReq>): BuyReq {
        const message = { items: [], language: "", location: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuyReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuyReq): BuyReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated buyback_proto.ReqItem items */ 1:
                    message.items.push(ReqItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string language */ 2:
                    message.language = reader.string();
                    break;
                case /* string location */ 3:
                    message.location = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BuyReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated buyback_proto.ReqItem items = 1; */
        for (let i = 0; i < message.items.length; i++)
            ReqItem.internalBinaryWrite(message.items[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string language = 2; */
        if (message.language !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.language);
        /* string location = 3; */
        if (message.location !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.location);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message buyback_proto.BuyReq
 */
export const BuyReq = new BuyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckReq$Type extends MessageType<CheckReq> {
    constructor() {
        super("buyback_proto.CheckReq", [
            { no: 1, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CheckReq>): CheckReq {
        const message = { hash: "", language: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckReq): CheckReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string hash */ 1:
                    message.hash = reader.string();
                    break;
                case /* string language */ 2:
                    message.language = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CheckReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string hash = 1; */
        if (message.hash !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.hash);
        /* string language = 2; */
        if (message.language !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.language);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message buyback_proto.CheckReq
 */
export const CheckReq = new CheckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RepItem$Type extends MessageType<RepItem> {
    constructor() {
        super("buyback_proto.RepItem", [
            { no: 1, name: "type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "parent_type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "quantity", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "price_per", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "accepted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "meta", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<RepItem>): RepItem {
        const message = { typeId: 0, parentTypeId: 0, quantity: 0, name: "", pricePer: 0, description: "", accepted: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RepItem>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RepItem): RepItem {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 type_id */ 1:
                    message.typeId = reader.uint32();
                    break;
                case /* uint32 parent_type_id */ 2:
                    message.parentTypeId = reader.uint32();
                    break;
                case /* double quantity */ 3:
                    message.quantity = reader.double();
                    break;
                case /* string name */ 4:
                    message.name = reader.string();
                    break;
                case /* double price_per */ 5:
                    message.pricePer = reader.double();
                    break;
                case /* string description */ 6:
                    message.description = reader.string();
                    break;
                case /* bool accepted */ 7:
                    message.accepted = reader.bool();
                    break;
                case /* google.protobuf.Struct meta */ 8:
                    message.meta = Struct.internalBinaryRead(reader, reader.uint32(), options, message.meta);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RepItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 type_id = 1; */
        if (message.typeId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.typeId);
        /* uint32 parent_type_id = 2; */
        if (message.parentTypeId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.parentTypeId);
        /* double quantity = 3; */
        if (message.quantity !== 0)
            writer.tag(3, WireType.Bit64).double(message.quantity);
        /* string name = 4; */
        if (message.name !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.name);
        /* double price_per = 5; */
        if (message.pricePer !== 0)
            writer.tag(5, WireType.Bit64).double(message.pricePer);
        /* string description = 6; */
        if (message.description !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.description);
        /* bool accepted = 7; */
        if (message.accepted !== false)
            writer.tag(7, WireType.Varint).bool(message.accepted);
        /* google.protobuf.Struct meta = 8; */
        if (message.meta)
            Struct.internalBinaryWrite(message.meta, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message buyback_proto.RepItem
 */
export const RepItem = new RepItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rep$Type extends MessageType<Rep> {
    constructor() {
        super("buyback_proto.Rep", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RepItem },
            { no: 2, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "sum", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "location", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Rep>): Rep {
        const message = { items: [], hash: "", sum: 0, timestamp: 0n, version: "", location: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Rep>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rep): Rep {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated buyback_proto.RepItem items */ 1:
                    message.items.push(RepItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string hash */ 2:
                    message.hash = reader.string();
                    break;
                case /* double sum */ 3:
                    message.sum = reader.double();
                    break;
                case /* uint64 timestamp */ 4:
                    message.timestamp = reader.uint64().toBigInt();
                    break;
                case /* string version */ 5:
                    message.version = reader.string();
                    break;
                case /* string location */ 6:
                    message.location = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Rep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated buyback_proto.RepItem items = 1; */
        for (let i = 0; i < message.items.length; i++)
            RepItem.internalBinaryWrite(message.items[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string hash = 2; */
        if (message.hash !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hash);
        /* double sum = 3; */
        if (message.sum !== 0)
            writer.tag(3, WireType.Bit64).double(message.sum);
        /* uint64 timestamp = 4; */
        if (message.timestamp !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.timestamp);
        /* string version = 5; */
        if (message.version !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.version);
        /* string location = 6; */
        if (message.location !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.location);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message buyback_proto.Rep
 */
export const Rep = new Rep$Type();
/**
 * @generated ServiceType for protobuf service buyback_proto.Buyback
 */
export const Buyback = new ServiceType("buyback_proto.Buyback", [
    { name: "Check", options: {}, I: CheckReq, O: Rep },
    { name: "Buy", options: {}, I: BuyReq, O: Rep }
]);
