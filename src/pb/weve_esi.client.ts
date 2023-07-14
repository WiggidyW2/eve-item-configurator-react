// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "weve_esi.proto" (package "weve_esi_proto", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { WeveEsi } from "./weve_esi";
import type { MultiMarketOrdersRep } from "./weve_esi";
import type { MultiMarketOrdersReq } from "./weve_esi";
import type { ExchangeContractsRep } from "./weve_esi";
import type { ExchangeContractsReq } from "./weve_esi";
import type { TransactionsRep } from "./weve_esi";
import type { TransactionsReq } from "./weve_esi";
import type { SystemIndexRep } from "./weve_esi";
import type { SystemIndexReq } from "./weve_esi";
import type { SkillsRep } from "./weve_esi";
import type { SkillsReq } from "./weve_esi";
import type { MarketOrdersRep } from "./weve_esi";
import type { MarketOrdersReq } from "./weve_esi";
import type { IndustryJobsRep } from "./weve_esi";
import type { IndustryJobsReq } from "./weve_esi";
import type { AssetsRep } from "./weve_esi";
import type { AssetsReq } from "./weve_esi";
import type { AdjustedPriceRep } from "./weve_esi";
import type { AdjustedPriceReq } from "./weve_esi";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ActiveOrdersRep } from "./weve_esi";
import type { ActiveOrdersReq } from "./weve_esi";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service weve_esi_proto.WeveEsi
 */
export interface IWeveEsiClient {
    /**
     * @generated from protobuf rpc: ActiveOrders(weve_esi_proto.ActiveOrdersReq) returns (weve_esi_proto.ActiveOrdersRep);
     */
    activeOrders(input: ActiveOrdersReq, options?: RpcOptions): UnaryCall<ActiveOrdersReq, ActiveOrdersRep>;
    /**
     * @generated from protobuf rpc: AdjustedPrice(weve_esi_proto.AdjustedPriceReq) returns (weve_esi_proto.AdjustedPriceRep);
     */
    adjustedPrice(input: AdjustedPriceReq, options?: RpcOptions): UnaryCall<AdjustedPriceReq, AdjustedPriceRep>;
    /**
     * @generated from protobuf rpc: Assets(weve_esi_proto.AssetsReq) returns (weve_esi_proto.AssetsRep);
     */
    assets(input: AssetsReq, options?: RpcOptions): UnaryCall<AssetsReq, AssetsRep>;
    /**
     * @generated from protobuf rpc: IndustryJobs(weve_esi_proto.IndustryJobsReq) returns (weve_esi_proto.IndustryJobsRep);
     */
    industryJobs(input: IndustryJobsReq, options?: RpcOptions): UnaryCall<IndustryJobsReq, IndustryJobsRep>;
    /**
     * @generated from protobuf rpc: MarketOrders(weve_esi_proto.MarketOrdersReq) returns (weve_esi_proto.MarketOrdersRep);
     */
    marketOrders(input: MarketOrdersReq, options?: RpcOptions): UnaryCall<MarketOrdersReq, MarketOrdersRep>;
    /**
     * @generated from protobuf rpc: Skills(weve_esi_proto.SkillsReq) returns (weve_esi_proto.SkillsRep);
     */
    skills(input: SkillsReq, options?: RpcOptions): UnaryCall<SkillsReq, SkillsRep>;
    /**
     * @generated from protobuf rpc: SystemIndex(weve_esi_proto.SystemIndexReq) returns (weve_esi_proto.SystemIndexRep);
     */
    systemIndex(input: SystemIndexReq, options?: RpcOptions): UnaryCall<SystemIndexReq, SystemIndexRep>;
    /**
     * @generated from protobuf rpc: Transactions(weve_esi_proto.TransactionsReq) returns (weve_esi_proto.TransactionsRep);
     */
    transactions(input: TransactionsReq, options?: RpcOptions): UnaryCall<TransactionsReq, TransactionsRep>;
    /**
     * @generated from protobuf rpc: ExchangeContracts(weve_esi_proto.ExchangeContractsReq) returns (weve_esi_proto.ExchangeContractsRep);
     */
    exchangeContracts(input: ExchangeContractsReq, options?: RpcOptions): UnaryCall<ExchangeContractsReq, ExchangeContractsRep>;
    /**
     * @generated from protobuf rpc: MultiMarketOrders(weve_esi_proto.MultiMarketOrdersReq) returns (weve_esi_proto.MultiMarketOrdersRep);
     */
    multiMarketOrders(input: MultiMarketOrdersReq, options?: RpcOptions): UnaryCall<MultiMarketOrdersReq, MultiMarketOrdersRep>;
}
/**
 * @generated from protobuf service weve_esi_proto.WeveEsi
 */
export class WeveEsiClient implements IWeveEsiClient, ServiceInfo {
    typeName = WeveEsi.typeName;
    methods = WeveEsi.methods;
    options = WeveEsi.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: ActiveOrders(weve_esi_proto.ActiveOrdersReq) returns (weve_esi_proto.ActiveOrdersRep);
     */
    activeOrders(input: ActiveOrdersReq, options?: RpcOptions): UnaryCall<ActiveOrdersReq, ActiveOrdersRep> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ActiveOrdersReq, ActiveOrdersRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AdjustedPrice(weve_esi_proto.AdjustedPriceReq) returns (weve_esi_proto.AdjustedPriceRep);
     */
    adjustedPrice(input: AdjustedPriceReq, options?: RpcOptions): UnaryCall<AdjustedPriceReq, AdjustedPriceRep> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<AdjustedPriceReq, AdjustedPriceRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Assets(weve_esi_proto.AssetsReq) returns (weve_esi_proto.AssetsRep);
     */
    assets(input: AssetsReq, options?: RpcOptions): UnaryCall<AssetsReq, AssetsRep> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<AssetsReq, AssetsRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: IndustryJobs(weve_esi_proto.IndustryJobsReq) returns (weve_esi_proto.IndustryJobsRep);
     */
    industryJobs(input: IndustryJobsReq, options?: RpcOptions): UnaryCall<IndustryJobsReq, IndustryJobsRep> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<IndustryJobsReq, IndustryJobsRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: MarketOrders(weve_esi_proto.MarketOrdersReq) returns (weve_esi_proto.MarketOrdersRep);
     */
    marketOrders(input: MarketOrdersReq, options?: RpcOptions): UnaryCall<MarketOrdersReq, MarketOrdersRep> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<MarketOrdersReq, MarketOrdersRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Skills(weve_esi_proto.SkillsReq) returns (weve_esi_proto.SkillsRep);
     */
    skills(input: SkillsReq, options?: RpcOptions): UnaryCall<SkillsReq, SkillsRep> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SkillsReq, SkillsRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SystemIndex(weve_esi_proto.SystemIndexReq) returns (weve_esi_proto.SystemIndexRep);
     */
    systemIndex(input: SystemIndexReq, options?: RpcOptions): UnaryCall<SystemIndexReq, SystemIndexRep> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<SystemIndexReq, SystemIndexRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Transactions(weve_esi_proto.TransactionsReq) returns (weve_esi_proto.TransactionsRep);
     */
    transactions(input: TransactionsReq, options?: RpcOptions): UnaryCall<TransactionsReq, TransactionsRep> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<TransactionsReq, TransactionsRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ExchangeContracts(weve_esi_proto.ExchangeContractsReq) returns (weve_esi_proto.ExchangeContractsRep);
     */
    exchangeContracts(input: ExchangeContractsReq, options?: RpcOptions): UnaryCall<ExchangeContractsReq, ExchangeContractsRep> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<ExchangeContractsReq, ExchangeContractsRep>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: MultiMarketOrders(weve_esi_proto.MultiMarketOrdersReq) returns (weve_esi_proto.MultiMarketOrdersRep);
     */
    multiMarketOrders(input: MultiMarketOrdersReq, options?: RpcOptions): UnaryCall<MultiMarketOrdersReq, MultiMarketOrdersRep> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<MultiMarketOrdersReq, MultiMarketOrdersRep>("unary", this._transport, method, opt, input);
    }
}
