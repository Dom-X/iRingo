// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { SourceType } from '../wk2/source-type.js';
export class Metadata {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsMetadata(bb, obj) {
        return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsMetadata(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    attributionUrl(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    expireTime() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    language(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    latitude() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    longitude() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    providerLogo(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    providerName(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    readTime() {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    reportedTime() {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    temporarilyUnavailable() {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    sourceType() {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : SourceType.APPLE_INTERNAL;
    }
    static startMetadata(builder) {
        builder.startObject(11);
    }
    static addAttributionUrl(builder, attributionUrlOffset) {
        builder.addFieldOffset(0, attributionUrlOffset, 0);
    }
    static addExpireTime(builder, expireTime) {
        builder.addFieldInt32(1, expireTime, 0);
    }
    static addLanguage(builder, languageOffset) {
        builder.addFieldOffset(2, languageOffset, 0);
    }
    static addLatitude(builder, latitude) {
        builder.addFieldFloat32(3, latitude, 0.0);
    }
    static addLongitude(builder, longitude) {
        builder.addFieldFloat32(4, longitude, 0.0);
    }
    static addProviderLogo(builder, providerLogoOffset) {
        builder.addFieldOffset(5, providerLogoOffset, 0);
    }
    static addProviderName(builder, providerNameOffset) {
        builder.addFieldOffset(6, providerNameOffset, 0);
    }
    static addReadTime(builder, readTime) {
        builder.addFieldInt32(7, readTime, 0);
    }
    static addReportedTime(builder, reportedTime) {
        builder.addFieldInt32(8, reportedTime, 0);
    }
    static addTemporarilyUnavailable(builder, temporarilyUnavailable) {
        builder.addFieldInt8(9, +temporarilyUnavailable, +false);
    }
    static addSourceType(builder, sourceType) {
        builder.addFieldInt8(10, sourceType, SourceType.APPLE_INTERNAL);
    }
    static endMetadata(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createMetadata(builder, attributionUrlOffset, expireTime, languageOffset, latitude, longitude, providerLogoOffset, providerNameOffset, readTime, reportedTime, temporarilyUnavailable, sourceType) {
        Metadata.startMetadata(builder);
        Metadata.addAttributionUrl(builder, attributionUrlOffset);
        Metadata.addExpireTime(builder, expireTime);
        Metadata.addLanguage(builder, languageOffset);
        Metadata.addLatitude(builder, latitude);
        Metadata.addLongitude(builder, longitude);
        Metadata.addProviderLogo(builder, providerLogoOffset);
        Metadata.addProviderName(builder, providerNameOffset);
        Metadata.addReadTime(builder, readTime);
        Metadata.addReportedTime(builder, reportedTime);
        Metadata.addTemporarilyUnavailable(builder, temporarilyUnavailable);
        Metadata.addSourceType(builder, sourceType);
        return Metadata.endMetadata(builder);
    }
}
