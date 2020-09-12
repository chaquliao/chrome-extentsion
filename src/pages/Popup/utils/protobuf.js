/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const im_proto = $root.im_proto = (() => {

    const im_proto = {};

    im_proto.Frame = (function() {

        function Frame(p) {
            this.headers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Frame.prototype.seqid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Frame.prototype.logid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Frame.prototype.service = 0;
        Frame.prototype.method = 0;
        Frame.prototype.headers = $util.emptyArray;
        Frame.prototype.payload_encoding = "";
        Frame.prototype.payload_type = "";
        Frame.prototype.payload = $util.newBuffer([]);

        Frame.create = function create(properties) {
            return new Frame(properties);
        };

        Frame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            w.uint32(8).uint64(m.seqid);
            w.uint32(16).uint64(m.logid);
            w.uint32(24).int32(m.service);
            w.uint32(32).int32(m.method);
            if (m.headers != null && m.headers.length) {
                for (var i = 0; i < m.headers.length; ++i)
                    $root.im_proto.Frame.ExtendedEntry.encode(m.headers[i], w.uint32(42).fork()).ldelim();
            }
            if (m.payload_encoding != null && m.hasOwnProperty("payload_encoding"))
                w.uint32(50).string(m.payload_encoding);
            if (m.payload_type != null && m.hasOwnProperty("payload_type"))
                w.uint32(58).string(m.payload_type);
            if (m.payload != null && m.hasOwnProperty("payload"))
                w.uint32(66).bytes(m.payload);
            return w;
        };

        Frame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.Frame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seqid = r.uint64();
                    break;
                case 2:
                    m.logid = r.uint64();
                    break;
                case 3:
                    m.service = r.int32();
                    break;
                case 4:
                    m.method = r.int32();
                    break;
                case 5:
                    if (!(m.headers && m.headers.length))
                        m.headers = [];
                    m.headers.push($root.im_proto.Frame.ExtendedEntry.decode(r, r.uint32()));
                    break;
                case 6:
                    m.payload_encoding = r.string();
                    break;
                case 7:
                    m.payload_type = r.string();
                    break;
                case 8:
                    m.payload = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            if (!m.hasOwnProperty("seqid"))
                throw $util.ProtocolError("missing required 'seqid'", { instance: m });
            if (!m.hasOwnProperty("logid"))
                throw $util.ProtocolError("missing required 'logid'", { instance: m });
            if (!m.hasOwnProperty("service"))
                throw $util.ProtocolError("missing required 'service'", { instance: m });
            if (!m.hasOwnProperty("method"))
                throw $util.ProtocolError("missing required 'method'", { instance: m });
            return m;
        };

        Frame.ExtendedEntry = (function() {

            function ExtendedEntry(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            ExtendedEntry.prototype.key = "";
            ExtendedEntry.prototype.value = "";

            ExtendedEntry.create = function create(properties) {
                return new ExtendedEntry(properties);
            };

            ExtendedEntry.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.key);
                w.uint32(18).string(m.value);
                return w;
            };

            ExtendedEntry.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.Frame.ExtendedEntry();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.key = r.string();
                        break;
                    case 2:
                        m.value = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("key"))
                    throw $util.ProtocolError("missing required 'key'", { instance: m });
                if (!m.hasOwnProperty("value"))
                    throw $util.ProtocolError("missing required 'value'", { instance: m });
                return m;
            };

            return ExtendedEntry;
        })();

        return Frame;
    })();

    im_proto.IMCMD = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "IMCMD_NOT_USED"] = 0;
        values[valuesById[100] = "SEND_MESSAGE"] = 100;
        values[valuesById[200] = "GET_MESSAGES_BY_USER"] = 200;
        values[valuesById[201] = "GET_MESSAGES_BY_USER_INIT"] = 201;
        values[valuesById[202] = "REPORT_GET_MESSAGES_CURSOR"] = 202;
        values[valuesById[203] = "GET_MESSAGES_BY_USER_INIT_V2"] = 203;
        values[valuesById[300] = "GET_CONVERSATION_LIST"] = 300;
        values[valuesById[301] = "GET_MESSAGES_BY_CONVERSATION"] = 301;
        values[valuesById[400] = "SEND_ONLINE"] = 400;
        values[valuesById[401] = "SEND_OFFLINE"] = 401;
        values[valuesById[402] = "SEND_CLIENT_FOREGROUND"] = 402;
        values[valuesById[403] = "SEND_CLIENT_BACKGROUND"] = 403;
        values[valuesById[410] = "SEND_USER_ACTION"] = 410;
        values[valuesById[411] = "SEND_INPUT_STATUS"] = 411;
        values[valuesById[500] = "NEW_MSG_NOTIFY"] = 500;
        values[valuesById[501] = "MARK_READ_NOTIFY"] = 501;
        values[valuesById[502] = "CONVERSATION_INFO_UPDATED_NOTIFY"] = 502;
        values[valuesById[600] = "GET_CONVERSATION_INFO"] = 600;
        values[valuesById[601] = "SET_CONVERSATION_INFO"] = 601;
        values[valuesById[602] = "CREATE_CONVERSATION"] = 602;
        values[valuesById[603] = "MARK_CONVERSATION_DELETE"] = 603;
        values[valuesById[604] = "MARK_CONVERSATION_READ"] = 604;
        values[valuesById[607] = "GET_CONVERSATION_INFO_LIST"] = 607;
        values[valuesById[608] = "GET_CONVERSATION_INFO_V2"] = 608;
        values[valuesById[609] = "CREATE_CONVERSATION_V2"] = 609;
        values[valuesById[610] = "GET_CONVERSATION_INFO_LIST_V2"] = 610;
        values[valuesById[611] = "GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2"] = 611;
        values[valuesById[612] = "GET_CONVERSATION_INFO_LIST_BY_TOP_V2"] = 612;
        values[valuesById[605] = "CONVERSATION_PARTICIPANTS_LIST"] = 605;
        values[valuesById[650] = "ADD_CONVERSATION_PARTICIPANTS"] = 650;
        values[valuesById[651] = "REMOVE_CONVERSATION_PARTICIPANTS"] = 651;
        values[valuesById[652] = "LEAVE_CONVERSATION"] = 652;
        values[valuesById[653] = "CONVERSATION_SET_ROLE"] = 653;
        values[valuesById[654] = "MGET_CONVERSATION_PARTICIPANTS"] = 654;
        values[valuesById[655] = "UPDATE_CONVERSATION_PARTICIPANT"] = 655;
        values[valuesById[701] = "DELETE_MESSAGE"] = 701;
        values[valuesById[702] = "RECALL_MESSAGE"] = 702;
        values[valuesById[801] = "GET_GROUP_INFO"] = 801;
        values[valuesById[802] = "SET_GROUP_INFO"] = 802;
        values[valuesById[803] = "GET_GROUP_INFO_LIST"] = 803;
        values[valuesById[901] = "GET_CONVERSATION_CORE_INFO"] = 901;
        values[valuesById[902] = "SET_CONVERSATION_CORE_INFO"] = 902;
        values[valuesById[903] = "GET_CONVERSATION_CORE_INFO_LIST"] = 903;
        values[valuesById[904] = "UPSERT_CONVERSATION_CORE_EXT_INFO"] = 904;
        values[valuesById[920] = "GET_CONVERSATION_SETTING_INFO"] = 920;
        values[valuesById[921] = "SET_CONVERSATION_SETTING_INFO"] = 921;
        values[valuesById[922] = "UPSERT_CONVERSATION_SETTING_EXT_INFO"] = 922;
        values[valuesById[1001] = "GET_STRANGER_CONVERSATION_LIST"] = 1001;
        values[valuesById[1002] = "GET_STRANGER_MESSAGES_IN_CONVERSATION"] = 1002;
        values[valuesById[1003] = "DELETE_STRANGER_MESSAGE"] = 1003;
        values[valuesById[1004] = "DELETE_STRANGER_CONVERSATION"] = 1004;
        values[valuesById[1005] = "DELETE_ALL_STRANGER_CONVERSATIONS"] = 1005;
        values[valuesById[1006] = "MARK_STRANGER_CONVERSATION_READ"] = 1006;
        values[valuesById[1007] = "MARK_ALL_STRANGER_CONVERSATIONS_READ"] = 1007;
        values[valuesById[1099] = "STRANGER_NEW_MSG_NOTIFY"] = 1099;
        return values;
    })();

    im_proto.StatusCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "INVALID_TOKEN"] = 1;
        values[valuesById[100] = "EXPIRED_TOKEN"] = 100;
        values[valuesById[2] = "INVALID_TICKET"] = 2;
        values[valuesById[3] = "CONVERSATION_NOT_FOUND"] = 3;
        values[valuesById[4] = "INVALID_REQUEST"] = 4;
        values[valuesById[5] = "INVALID_CMD"] = 5;
        values[valuesById[6] = "SERVER_ERR"] = 6;
        values[valuesById[7] = "DEVICE_NOT_BIND"] = 7;
        values[valuesById[8] = "MESSAGE_ILLEGAL"] = 8;
        values[valuesById[9] = "USER_ILLEGAL"] = 9;
        values[valuesById[10] = "USER_NOT_FRIENDS"] = 10;
        values[valuesById[11] = "USER_FORBIDDEN"] = 11;
        values[valuesById[12] = "USER_SILENCE"] = 12;
        values[valuesById[13] = "USER_NOT_IN_GROUP"] = 13;
        values[valuesById[14] = "USER_BANNED_TO_POST"] = 14;
        values[valuesById[500] = "INTERNAL_ERROR"] = 500;
        return values;
    })();

    im_proto.SendMessageStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SEND_SUCCEED"] = 0;
        values[valuesById[1] = "USER_NOT_IN_CONVERSATION"] = 1;
        values[valuesById[2] = "CHECK_CONV_NOT_PASS"] = 2;
        values[valuesById[3] = "CHECK_MSG_NOT_PASS"] = 3;
        values[valuesById[4] = "CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE"] = 4;
        return values;
    })();

    im_proto.ConversationOperationStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OP_SUCCEED"] = 0;
        values[valuesById[1] = "REJECTED"] = 1;
        values[valuesById[2] = "PARTLY_REJECTED"] = 2;
        return values;
    })();

    im_proto.Refer = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REFER_NOT_USED"] = 0;
        values[valuesById[1] = "ANDROID"] = 1;
        values[valuesById[2] = "IOS"] = 2;
        values[valuesById[3] = "PC"] = 3;
        values[valuesById[4] = "SERVER"] = 4;
        return values;
    })();

    im_proto.ConversationType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ONE_TO_ONE_CHAT"] = 1;
        values[valuesById[2] = "GROUP_CHAT"] = 2;
        return values;
    })();

    im_proto.MessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MESSAGE_TYPE_NOT_USED"] = 0;
        values[valuesById[1] = "LEGACY_MESSAGE_TYPE_SYSTEM"] = 1;
        values[valuesById[2] = "LEGACY_MESSAGE_TYPE_IMAGE"] = 2;
        values[valuesById[3] = "LEGACY_MESSAGE_TYPE_AUDIO"] = 3;
        values[valuesById[4] = "LEGACY_MESSAGE_TYPE_VIDEO"] = 4;
        values[valuesById[5] = "LEGACY_MESSAGE_TYPE_EMOJI"] = 5;
        values[valuesById[6] = "LEGACY_MESSAGE_TYPE_FILE"] = 6;
        values[valuesById[7] = "LEGACY_MESSAGE_TYPE_TEXT"] = 7;
        values[valuesById[8] = "LEGACY_MESSAGE_TYPE_USER_CARD"] = 8;
        values[valuesById[9] = "LEGACY_MESSAGE_TYPE_TOAST"] = 9;
        values[valuesById[10] = "LEGACY_MESSAGE_TYPE_GROUP_CARD"] = 10;
        values[valuesById[10001] = "MESSAGE_TYPE_TEXT"] = 10001;
        values[valuesById[10002] = "MESSAGE_TYPE_STICKER"] = 10002;
        values[valuesById[10003] = "MESSAGE_TYPE_IMAGE"] = 10003;
        values[valuesById[10004] = "MESSAGE_TYPE_VIDEO"] = 10004;
        values[valuesById[10005] = "MESSAGE_TYPE_FILE"] = 10005;
        values[valuesById[10006] = "MESSAGE_TYPE_AUDIO"] = 10006;
        values[valuesById[10007] = "MESSAGE_TYPE_LOCATION"] = 10007;
        values[valuesById[10008] = "MESSAGE_TYPE_SYSTEM"] = 10008;
        values[valuesById[10009] = "MESSAGE_TYPE_LINK"] = 10009;
        values[valuesById[50001] = "MESSAGE_TYPE_COMMAND"] = 50001;
        values[valuesById[50002] = "MESSAGE_TYPE_UPDATE_MESSAGE"] = 50002;
        values[valuesById[50010] = "MESSAGE_TYPE_MODE_CHANGE"] = 50010;
        values[valuesById[50003] = "MESSAGE_TYPE_UPDATE_MIN_INDEX"] = 50003;
        values[valuesById[50004] = "MESSAGE_TYPE_USER_ACTION"] = 50004;
        values[valuesById[60001] = "MESSAGE_TYPE_NOTIFY_COMMAND"] = 60001;
        return values;
    })();

    im_proto.GroupRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ORDINARY"] = 0;
        values[valuesById[1] = "OWNER"] = 1;
        values[valuesById[2] = "MANAGER"] = 2;
        return values;
    })();

    im_proto.GroupAuth = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UPDATE_GROUP_NAME"] = 0;
        values[valuesById[1] = "RECALL_ORDINARY_MESSAGE"] = 1;
        values[valuesById[2] = "RECALL_MANAGER_MESSAGE"] = 2;
        values[valuesById[3] = "ADD_PARTICIPANT"] = 3;
        values[valuesById[4] = "REMOVE_PARTICIPANT"] = 4;
        values[valuesById[5] = "SET_MANAGER"] = 5;
        values[valuesById[6] = "DISSOLVE_GROUP"] = 6;
        values[valuesById[7] = "PUBLISH_NOTICE"] = 7;
        return values;
    })();

    im_proto.MessageBody = (function() {

        function MessageBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessageBody.prototype.conversation_id = "";
        MessageBody.prototype.conversation_type = 0;
        MessageBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.index_in_conversation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.message_type = 0;
        MessageBody.prototype.sender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.content = "";
        MessageBody.prototype.ext = $util.emptyObject;
        MessageBody.prototype.create_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.status = 0;
        MessageBody.prototype.order_in_conversation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageBody.prototype.sec_sender = "";

        MessageBody.create = function create(properties) {
            return new MessageBody(properties);
        };

        MessageBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.server_message_id != null && m.hasOwnProperty("server_message_id"))
                w.uint32(24).int64(m.server_message_id);
            if (m.index_in_conversation != null && m.hasOwnProperty("index_in_conversation"))
                w.uint32(32).int64(m.index_in_conversation);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(40).int64(m.conversation_short_id);
            if (m.message_type != null && m.hasOwnProperty("message_type"))
                w.uint32(48).int32(m.message_type);
            if (m.sender != null && m.hasOwnProperty("sender"))
                w.uint32(56).int64(m.sender);
            if (m.content != null && m.hasOwnProperty("content"))
                w.uint32(66).string(m.content);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(74).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            if (m.create_time != null && m.hasOwnProperty("create_time"))
                w.uint32(80).int64(m.create_time);
            if (m.version != null && m.hasOwnProperty("version"))
                w.uint32(88).int64(m.version);
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(96).int32(m.status);
            if (m.order_in_conversation != null && m.hasOwnProperty("order_in_conversation"))
                w.uint32(104).int64(m.order_in_conversation);
            if (m.sec_sender != null && m.hasOwnProperty("sec_sender"))
                w.uint32(114).string(m.sec_sender);
            return w;
        };

        MessageBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessageBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.server_message_id = r.int64();
                    break;
                case 4:
                    m.index_in_conversation = r.int64();
                    break;
                case 5:
                    m.conversation_short_id = r.int64();
                    break;
                case 6:
                    m.message_type = r.int32();
                    break;
                case 7:
                    m.sender = r.int64();
                    break;
                case 8:
                    m.content = r.string();
                    break;
                case 9:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                case 10:
                    m.create_time = r.int64();
                    break;
                case 11:
                    m.version = r.int64();
                    break;
                case 12:
                    m.status = r.int32();
                    break;
                case 13:
                    m.order_in_conversation = r.int64();
                    break;
                case 14:
                    m.sec_sender = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessageBody;
    })();

    im_proto.ParticipantRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PARTICIPANT_ROLE_NORMAL"] = 0;
        values[valuesById[1] = "PARTICIPANT_ROLE_OWNER"] = 1;
        values[valuesById[2] = "PARTICIPANT_ROLE_ADMIN"] = 2;
        return values;
    })();

    im_proto.Participant = (function() {

        function Participant(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Participant.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Participant.prototype.sort_order = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Participant.prototype.role = 0;
        Participant.prototype.alias = "";
        Participant.prototype.sec_uid = "";

        Participant.create = function create(properties) {
            return new Participant(properties);
        };

        Participant.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.user_id != null && m.hasOwnProperty("user_id"))
                w.uint32(8).int64(m.user_id);
            if (m.sort_order != null && m.hasOwnProperty("sort_order"))
                w.uint32(16).int64(m.sort_order);
            if (m.role != null && m.hasOwnProperty("role"))
                w.uint32(24).int32(m.role);
            if (m.alias != null && m.hasOwnProperty("alias"))
                w.uint32(34).string(m.alias);
            if (m.sec_uid != null && m.hasOwnProperty("sec_uid"))
                w.uint32(42).string(m.sec_uid);
            return w;
        };

        Participant.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.Participant();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.user_id = r.int64();
                    break;
                case 2:
                    m.sort_order = r.int64();
                    break;
                case 3:
                    m.role = r.int32();
                    break;
                case 4:
                    m.alias = r.string();
                    break;
                case 5:
                    m.sec_uid = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Participant;
    })();

    im_proto.ParticipantsPage = (function() {

        function ParticipantsPage(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ParticipantsPage.prototype.participants = $util.emptyArray;
        ParticipantsPage.prototype.has_more = false;
        ParticipantsPage.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ParticipantsPage.create = function create(properties) {
            return new ParticipantsPage(properties);
        };

        ParticipantsPage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    $root.im_proto.Participant.encode(m.participants[i], w.uint32(10).fork()).ldelim();
            }
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(16).bool(m.has_more);
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(24).int64(m.cursor);
            return w;
        };

        ParticipantsPage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ParticipantsPage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    m.participants.push($root.im_proto.Participant.decode(r, r.uint32()));
                    break;
                case 2:
                    m.has_more = r.bool();
                    break;
                case 3:
                    m.cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ParticipantsPage;
    })();

    im_proto.ConversationInfo = (function() {

        function ConversationInfo(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationInfo.prototype.conversation_id = "";
        ConversationInfo.prototype.conversation_type = 0;
        ConversationInfo.prototype.first_page_participants = null;
        ConversationInfo.prototype.participants_count = 0;
        ConversationInfo.prototype.min_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfo.prototype.read_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfo.prototype.mute = 0;
        ConversationInfo.prototype.stick_on_top = 0;
        ConversationInfo.prototype.ext = $util.emptyObject;
        ConversationInfo.prototype.ticket = "";
        ConversationInfo.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfo.prototype.conversation_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfo.prototype.is_participant = false;
        ConversationInfo.prototype.server_unread_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfo.prototype.last_message_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ConversationInfo.create = function create(properties) {
            return new ConversationInfo(properties);
        };

        ConversationInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.first_page_participants != null && m.hasOwnProperty("first_page_participants"))
                $root.im_proto.ParticipantsPage.encode(m.first_page_participants, w.uint32(26).fork()).ldelim();
            if (m.participants_count != null && m.hasOwnProperty("participants_count"))
                w.uint32(32).int32(m.participants_count);
            if (m.min_index != null && m.hasOwnProperty("min_index"))
                w.uint32(40).int64(m.min_index);
            if (m.read_index != null && m.hasOwnProperty("read_index"))
                w.uint32(48).int64(m.read_index);
            if (m.mute != null && m.hasOwnProperty("mute"))
                w.uint32(64).int32(m.mute);
            if (m.stick_on_top != null && m.hasOwnProperty("stick_on_top"))
                w.uint32(72).int32(m.stick_on_top);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(82).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            if (m.ticket != null && m.hasOwnProperty("ticket"))
                w.uint32(90).string(m.ticket);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(96).int64(m.conversation_short_id);
            if (m.conversation_version != null && m.hasOwnProperty("conversation_version"))
                w.uint32(104).int64(m.conversation_version);
            if (m.is_participant != null && m.hasOwnProperty("is_participant"))
                w.uint32(112).bool(m.is_participant);
            if (m.server_unread_count != null && m.hasOwnProperty("server_unread_count"))
                w.uint32(160).int64(m.server_unread_count);
            if (m.last_message_index != null && m.hasOwnProperty("last_message_index"))
                w.uint32(168).int64(m.last_message_index);
            return w;
        };

        ConversationInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationInfo(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.first_page_participants = $root.im_proto.ParticipantsPage.decode(r, r.uint32());
                    break;
                case 4:
                    m.participants_count = r.int32();
                    break;
                case 5:
                    m.min_index = r.int64();
                    break;
                case 6:
                    m.read_index = r.int64();
                    break;
                case 8:
                    m.mute = r.int32();
                    break;
                case 9:
                    m.stick_on_top = r.int32();
                    break;
                case 10:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                case 11:
                    m.ticket = r.string();
                    break;
                case 12:
                    m.conversation_short_id = r.int64();
                    break;
                case 13:
                    m.conversation_version = r.int64();
                    break;
                case 14:
                    m.is_participant = r.bool();
                    break;
                case 20:
                    m.server_unread_count = r.int64();
                    break;
                case 21:
                    m.last_message_index = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationInfo;
    })();

    im_proto.ConversationInfoV2 = (function() {

        function ConversationInfoV2(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationInfoV2.prototype.conversation_id = "";
        ConversationInfoV2.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationInfoV2.prototype.conversation_type = 0;
        ConversationInfoV2.prototype.ticket = "";
        ConversationInfoV2.prototype.first_page_participants = null;
        ConversationInfoV2.prototype.participants_count = 0;
        ConversationInfoV2.prototype.is_participant = false;
        ConversationInfoV2.prototype.inbox_type = 0;
        ConversationInfoV2.prototype.conversation_core_info = null;
        ConversationInfoV2.prototype.conversation_setting_info = null;

        ConversationInfoV2.create = function create(properties) {
            return new ConversationInfoV2(properties);
        };

        ConversationInfoV2.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.ticket != null && m.hasOwnProperty("ticket"))
                w.uint32(34).string(m.ticket);
            if (m.first_page_participants != null && m.hasOwnProperty("first_page_participants"))
                $root.im_proto.ParticipantsPage.encode(m.first_page_participants, w.uint32(50).fork()).ldelim();
            if (m.participants_count != null && m.hasOwnProperty("participants_count"))
                w.uint32(56).int32(m.participants_count);
            if (m.is_participant != null && m.hasOwnProperty("is_participant"))
                w.uint32(64).bool(m.is_participant);
            if (m.inbox_type != null && m.hasOwnProperty("inbox_type"))
                w.uint32(72).int32(m.inbox_type);
            if (m.conversation_core_info != null && m.hasOwnProperty("conversation_core_info"))
                $root.im_proto.ConversationCoreInfo.encode(m.conversation_core_info, w.uint32(402).fork()).ldelim();
            if (m.conversation_setting_info != null && m.hasOwnProperty("conversation_setting_info"))
                $root.im_proto.ConversationSettingInfo.encode(m.conversation_setting_info, w.uint32(410).fork()).ldelim();
            return w;
        };

        ConversationInfoV2.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationInfoV2();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.ticket = r.string();
                    break;
                case 6:
                    m.first_page_participants = $root.im_proto.ParticipantsPage.decode(r, r.uint32());
                    break;
                case 7:
                    m.participants_count = r.int32();
                    break;
                case 8:
                    m.is_participant = r.bool();
                    break;
                case 9:
                    m.inbox_type = r.int32();
                    break;
                case 50:
                    m.conversation_core_info = $root.im_proto.ConversationCoreInfo.decode(r, r.uint32());
                    break;
                case 51:
                    m.conversation_setting_info = $root.im_proto.ConversationSettingInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationInfoV2;
    })();

    im_proto.ConversationCoreInfo = (function() {

        function ConversationCoreInfo(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationCoreInfo.prototype.conversation_id = "";
        ConversationCoreInfo.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationCoreInfo.prototype.conversation_type = 0;
        ConversationCoreInfo.prototype.info_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationCoreInfo.prototype.name = "";
        ConversationCoreInfo.prototype.desc = "";
        ConversationCoreInfo.prototype.icon = "";
        ConversationCoreInfo.prototype.inbox_type = 0;
        ConversationCoreInfo.prototype.notice = "";
        ConversationCoreInfo.prototype.ext = $util.emptyObject;

        ConversationCoreInfo.create = function create(properties) {
            return new ConversationCoreInfo(properties);
        };

        ConversationCoreInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.info_version != null && m.hasOwnProperty("info_version"))
                w.uint32(32).int64(m.info_version);
            if (m.name != null && m.hasOwnProperty("name"))
                w.uint32(42).string(m.name);
            if (m.desc != null && m.hasOwnProperty("desc"))
                w.uint32(50).string(m.desc);
            if (m.icon != null && m.hasOwnProperty("icon"))
                w.uint32(58).string(m.icon);
            if (m.inbox_type != null && m.hasOwnProperty("inbox_type"))
                w.uint32(64).int32(m.inbox_type);
            if (m.notice != null && m.hasOwnProperty("notice"))
                w.uint32(74).string(m.notice);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(90).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        ConversationCoreInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationCoreInfo(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.info_version = r.int64();
                    break;
                case 5:
                    m.name = r.string();
                    break;
                case 6:
                    m.desc = r.string();
                    break;
                case 7:
                    m.icon = r.string();
                    break;
                case 8:
                    m.inbox_type = r.int32();
                    break;
                case 9:
                    m.notice = r.string();
                    break;
                case 11:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationCoreInfo;
    })();

    im_proto.ConversationSettingInfo = (function() {

        function ConversationSettingInfo(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationSettingInfo.prototype.conversation_id = "";
        ConversationSettingInfo.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSettingInfo.prototype.conversation_type = 0;
        ConversationSettingInfo.prototype.min_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSettingInfo.prototype.read_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSettingInfo.prototype.mute = 0;
        ConversationSettingInfo.prototype.stick_on_top = 0;
        ConversationSettingInfo.prototype.inbox_type = 0;
        ConversationSettingInfo.prototype.ext = $util.emptyObject;
        ConversationSettingInfo.prototype.setting_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSettingInfo.prototype.favorite = 0;

        ConversationSettingInfo.create = function create(properties) {
            return new ConversationSettingInfo(properties);
        };

        ConversationSettingInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.min_index != null && m.hasOwnProperty("min_index"))
                w.uint32(32).int64(m.min_index);
            if (m.read_index != null && m.hasOwnProperty("read_index"))
                w.uint32(40).int64(m.read_index);
            if (m.mute != null && m.hasOwnProperty("mute"))
                w.uint32(48).int32(m.mute);
            if (m.stick_on_top != null && m.hasOwnProperty("stick_on_top"))
                w.uint32(56).int32(m.stick_on_top);
            if (m.inbox_type != null && m.hasOwnProperty("inbox_type"))
                w.uint32(64).int32(m.inbox_type);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(74).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            if (m.setting_version != null && m.hasOwnProperty("setting_version"))
                w.uint32(80).int64(m.setting_version);
            if (m.favorite != null && m.hasOwnProperty("favorite"))
                w.uint32(88).int32(m.favorite);
            return w;
        };

        ConversationSettingInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationSettingInfo(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.min_index = r.int64();
                    break;
                case 5:
                    m.read_index = r.int64();
                    break;
                case 6:
                    m.mute = r.int32();
                    break;
                case 7:
                    m.stick_on_top = r.int32();
                    break;
                case 8:
                    m.inbox_type = r.int32();
                    break;
                case 9:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                case 10:
                    m.setting_version = r.int64();
                    break;
                case 11:
                    m.favorite = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationSettingInfo;
    })();

    im_proto.GroupInfo = (function() {

        function GroupInfo(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GroupInfo.prototype.conversation_id = "";
        GroupInfo.prototype.info_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupInfo.prototype.group_name = "";
        GroupInfo.prototype.group_desc = "";
        GroupInfo.prototype.group_icon = "";
        GroupInfo.prototype.ext = $util.emptyObject;

        GroupInfo.create = function create(properties) {
            return new GroupInfo(properties);
        };

        GroupInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.info_version != null && m.hasOwnProperty("info_version"))
                w.uint32(16).int64(m.info_version);
            if (m.group_name != null && m.hasOwnProperty("group_name"))
                w.uint32(42).string(m.group_name);
            if (m.group_desc != null && m.hasOwnProperty("group_desc"))
                w.uint32(50).string(m.group_desc);
            if (m.group_icon != null && m.hasOwnProperty("group_icon"))
                w.uint32(58).string(m.group_icon);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(82).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        GroupInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GroupInfo(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.info_version = r.int64();
                    break;
                case 5:
                    m.group_name = r.string();
                    break;
                case 6:
                    m.group_desc = r.string();
                    break;
                case 7:
                    m.group_icon = r.string();
                    break;
                case 10:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GroupInfo;
    })();

    im_proto.MessagesPerUserRequestBody = (function() {

        function MessagesPerUserRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserRequestBody.prototype.limit = 50;

        MessagesPerUserRequestBody.create = function create(properties) {
            return new MessagesPerUserRequestBody(properties);
        };

        MessagesPerUserRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            if (m.limit != null && m.hasOwnProperty("limit"))
                w.uint32(16).int32(m.limit);
            return w;
        };

        MessagesPerUserRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                case 2:
                    m.limit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserRequestBody;
    })();

    im_proto.MessagesPerUserResponseBody = (function() {

        function MessagesPerUserResponseBody(p) {
            this.messages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserResponseBody.prototype.messages = $util.emptyArray;
        MessagesPerUserResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserResponseBody.prototype.has_more = false;

        MessagesPerUserResponseBody.create = function create(properties) {
            return new MessagesPerUserResponseBody(properties);
        };

        MessagesPerUserResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.im_proto.MessageBody.encode(m.messages[i], w.uint32(10).fork()).ldelim();
            }
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(16).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(24).bool(m.has_more);
            return w;
        };

        MessagesPerUserResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.messages && m.messages.length))
                        m.messages = [];
                    m.messages.push($root.im_proto.MessageBody.decode(r, r.uint32()));
                    break;
                case 2:
                    m.next_cursor = r.int64();
                    break;
                case 3:
                    m.has_more = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserResponseBody;
    })();

    im_proto.MessagesPerUserInitRequestBody = (function() {

        function MessagesPerUserInitRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserInitRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MessagesPerUserInitRequestBody.create = function create(properties) {
            return new MessagesPerUserInitRequestBody(properties);
        };

        MessagesPerUserInitRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            return w;
        };

        MessagesPerUserInitRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserInitRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserInitRequestBody;
    })();

    im_proto.MessagesPerUserInitResponseBody = (function() {

        function MessagesPerUserInitResponseBody(p) {
            this.messages = [];
            this.conversations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserInitResponseBody.prototype.messages = $util.emptyArray;
        MessagesPerUserInitResponseBody.prototype.conversations = $util.emptyArray;
        MessagesPerUserInitResponseBody.prototype.per_user_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserInitResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserInitResponseBody.prototype.has_more = false;

        MessagesPerUserInitResponseBody.create = function create(properties) {
            return new MessagesPerUserInitResponseBody(properties);
        };

        MessagesPerUserInitResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.im_proto.MessageBody.encode(m.messages[i], w.uint32(10).fork()).ldelim();
            }
            if (m.conversations != null && m.conversations.length) {
                for (var i = 0; i < m.conversations.length; ++i)
                    $root.im_proto.ConversationInfo.encode(m.conversations[i], w.uint32(18).fork()).ldelim();
            }
            if (m.per_user_cursor != null && m.hasOwnProperty("per_user_cursor"))
                w.uint32(24).int64(m.per_user_cursor);
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(32).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(40).bool(m.has_more);
            return w;
        };

        MessagesPerUserInitResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserInitResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.messages && m.messages.length))
                        m.messages = [];
                    m.messages.push($root.im_proto.MessageBody.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.conversations && m.conversations.length))
                        m.conversations = [];
                    m.conversations.push($root.im_proto.ConversationInfo.decode(r, r.uint32()));
                    break;
                case 3:
                    m.per_user_cursor = r.int64();
                    break;
                case 4:
                    m.next_cursor = r.int64();
                    break;
                case 5:
                    m.has_more = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserInitResponseBody;
    })();

    im_proto.MessagesPerUserInitV2RequestBody = (function() {

        function MessagesPerUserInitV2RequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserInitV2RequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MessagesPerUserInitV2RequestBody.create = function create(properties) {
            return new MessagesPerUserInitV2RequestBody(properties);
        };

        MessagesPerUserInitV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            return w;
        };

        MessagesPerUserInitV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserInitV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserInitV2RequestBody;
    })();

    im_proto.MessagesPerUserInitV2ResponseBody = (function() {

        function MessagesPerUserInitV2ResponseBody(p) {
            this.messages = [];
            this.conversations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesPerUserInitV2ResponseBody.prototype.messages = $util.emptyArray;
        MessagesPerUserInitV2ResponseBody.prototype.conversations = $util.emptyArray;
        MessagesPerUserInitV2ResponseBody.prototype.per_user_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserInitV2ResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesPerUserInitV2ResponseBody.prototype.has_more = false;

        MessagesPerUserInitV2ResponseBody.create = function create(properties) {
            return new MessagesPerUserInitV2ResponseBody(properties);
        };

        MessagesPerUserInitV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.im_proto.MessageBody.encode(m.messages[i], w.uint32(10).fork()).ldelim();
            }
            if (m.conversations != null && m.conversations.length) {
                for (var i = 0; i < m.conversations.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(m.conversations[i], w.uint32(18).fork()).ldelim();
            }
            if (m.per_user_cursor != null && m.hasOwnProperty("per_user_cursor"))
                w.uint32(24).int64(m.per_user_cursor);
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(32).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(40).bool(m.has_more);
            return w;
        };

        MessagesPerUserInitV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesPerUserInitV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.messages && m.messages.length))
                        m.messages = [];
                    m.messages.push($root.im_proto.MessageBody.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.conversations && m.conversations.length))
                        m.conversations = [];
                    m.conversations.push($root.im_proto.ConversationInfoV2.decode(r, r.uint32()));
                    break;
                case 3:
                    m.per_user_cursor = r.int64();
                    break;
                case 4:
                    m.next_cursor = r.int64();
                    break;
                case 5:
                    m.has_more = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesPerUserInitV2ResponseBody;
    })();

    im_proto.ReportGetMessagesCursorRequestBody = (function() {

        function ReportGetMessagesCursorRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ReportGetMessagesCursorRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ReportGetMessagesCursorRequestBody.create = function create(properties) {
            return new ReportGetMessagesCursorRequestBody(properties);
        };

        ReportGetMessagesCursorRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            return w;
        };

        ReportGetMessagesCursorRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ReportGetMessagesCursorRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReportGetMessagesCursorRequestBody;
    })();

    im_proto.ConversationsListPolicy = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ALL"] = 1;
        values[valuesById[2] = "HOT"] = 2;
        return values;
    })();

    im_proto.ConversationsListRequestBody = (function() {

        function ConversationsListRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationsListRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationsListRequestBody.prototype.policy = 1;

        ConversationsListRequestBody.create = function create(properties) {
            return new ConversationsListRequestBody(properties);
        };

        ConversationsListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            if (m.policy != null && m.hasOwnProperty("policy"))
                w.uint32(16).int32(m.policy);
            return w;
        };

        ConversationsListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationsListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                case 2:
                    m.policy = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationsListRequestBody;
    })();

    im_proto.ConversationsListResponseBody = (function() {

        function ConversationsListResponseBody(p) {
            this.conversations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationsListResponseBody.prototype.conversations = $util.emptyArray;
        ConversationsListResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationsListResponseBody.prototype.has_more = false;

        ConversationsListResponseBody.create = function create(properties) {
            return new ConversationsListResponseBody(properties);
        };

        ConversationsListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversations != null && m.conversations.length) {
                for (var i = 0; i < m.conversations.length; ++i)
                    $root.im_proto.ConversationInfo.encode(m.conversations[i], w.uint32(10).fork()).ldelim();
            }
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(16).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(24).bool(m.has_more);
            return w;
        };

        ConversationsListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationsListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversations && m.conversations.length))
                        m.conversations = [];
                    m.conversations.push($root.im_proto.ConversationInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.next_cursor = r.int64();
                    break;
                case 3:
                    m.has_more = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationsListResponseBody;
    })();

    im_proto.MessageDirection = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "OLDER"] = 1;
        values[valuesById[2] = "NEWER"] = 2;
        values[valuesById[3] = "FROM_LATEST"] = 3;
        return values;
    })();

    im_proto.MessagesInConversationRequestBody = (function() {

        function MessagesInConversationRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesInConversationRequestBody.prototype.conversation_id = "";
        MessagesInConversationRequestBody.prototype.conversation_type = 0;
        MessagesInConversationRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesInConversationRequestBody.prototype.direction = 1;
        MessagesInConversationRequestBody.prototype.anchor_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesInConversationRequestBody.prototype.limit = 50;

        MessagesInConversationRequestBody.create = function create(properties) {
            return new MessagesInConversationRequestBody(properties);
        };

        MessagesInConversationRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(24).int64(m.conversation_short_id);
            if (m.direction != null && m.hasOwnProperty("direction"))
                w.uint32(32).int32(m.direction);
            if (m.anchor_index != null && m.hasOwnProperty("anchor_index"))
                w.uint32(40).int64(m.anchor_index);
            if (m.limit != null && m.hasOwnProperty("limit"))
                w.uint32(48).int32(m.limit);
            return w;
        };

        MessagesInConversationRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesInConversationRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.conversation_short_id = r.int64();
                    break;
                case 4:
                    m.direction = r.int32();
                    break;
                case 5:
                    m.anchor_index = r.int64();
                    break;
                case 6:
                    m.limit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesInConversationRequestBody;
    })();

    im_proto.MessagesInConversationResponseBody = (function() {

        function MessagesInConversationResponseBody(p) {
            this.messages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessagesInConversationResponseBody.prototype.messages = $util.emptyArray;
        MessagesInConversationResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessagesInConversationResponseBody.prototype.has_more = false;

        MessagesInConversationResponseBody.create = function create(properties) {
            return new MessagesInConversationResponseBody(properties);
        };

        MessagesInConversationResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.im_proto.MessageBody.encode(m.messages[i], w.uint32(10).fork()).ldelim();
            }
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(16).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(24).bool(m.has_more);
            return w;
        };

        MessagesInConversationResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MessagesInConversationResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.messages && m.messages.length))
                        m.messages = [];
                    m.messages.push($root.im_proto.MessageBody.decode(r, r.uint32()));
                    break;
                case 2:
                    m.next_cursor = r.int64();
                    break;
                case 3:
                    m.has_more = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessagesInConversationResponseBody;
    })();

    im_proto.CreateConversationRequestBody = (function() {

        function CreateConversationRequestBody(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CreateConversationRequestBody.prototype.conversation_type = 0;
        CreateConversationRequestBody.prototype.participants = $util.emptyArray;

        CreateConversationRequestBody.create = function create(properties) {
            return new CreateConversationRequestBody(properties);
        };

        CreateConversationRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(8).int32(m.conversation_type);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    w.uint32(16).int64(m.participants[i]);
            }
            return w;
        };

        CreateConversationRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.CreateConversationRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_type = r.int32();
                    break;
                case 2:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.participants.push(r.int64());
                    } else
                        m.participants.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CreateConversationRequestBody;
    })();

    im_proto.CreateConversationResponseBody = (function() {

        function CreateConversationResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CreateConversationResponseBody.prototype.conversation = null;
        CreateConversationResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CreateConversationResponseBody.prototype.check_message = "";
        CreateConversationResponseBody.prototype.extra_info = "";
        CreateConversationResponseBody.prototype.status = 0;

        CreateConversationResponseBody.create = function create(properties) {
            return new CreateConversationResponseBody(properties);
        };

        CreateConversationResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation != null && m.hasOwnProperty("conversation"))
                $root.im_proto.ConversationInfo.encode(m.conversation, w.uint32(10).fork()).ldelim();
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(16).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(26).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(34).string(m.extra_info);
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(40).int32(m.status);
            return w;
        };

        CreateConversationResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.CreateConversationResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation = $root.im_proto.ConversationInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.check_code = r.int64();
                    break;
                case 3:
                    m.check_message = r.string();
                    break;
                case 4:
                    m.extra_info = r.string();
                    break;
                case 5:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CreateConversationResponseBody;
    })();

    im_proto.CreateConversationV2RequestBody = (function() {

        function CreateConversationV2RequestBody(p) {
            this.participants = [];
            this.sec_participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CreateConversationV2RequestBody.prototype.conversation_type = 0;
        CreateConversationV2RequestBody.prototype.participants = $util.emptyArray;
        CreateConversationV2RequestBody.prototype.persistent = false;
        CreateConversationV2RequestBody.prototype.idempotent_id = "";
        CreateConversationV2RequestBody.prototype.sec_participants = $util.emptyArray;
        CreateConversationV2RequestBody.prototype.name = "";
        CreateConversationV2RequestBody.prototype.avatar_url = "";
        CreateConversationV2RequestBody.prototype.description = "";

        CreateConversationV2RequestBody.create = function create(properties) {
            return new CreateConversationV2RequestBody(properties);
        };

        CreateConversationV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(8).int32(m.conversation_type);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    w.uint32(16).int64(m.participants[i]);
            }
            if (m.persistent != null && m.hasOwnProperty("persistent"))
                w.uint32(24).bool(m.persistent);
            if (m.idempotent_id != null && m.hasOwnProperty("idempotent_id"))
                w.uint32(34).string(m.idempotent_id);
            if (m.sec_participants != null && m.sec_participants.length) {
                for (var i = 0; i < m.sec_participants.length; ++i)
                    w.uint32(42).string(m.sec_participants[i]);
            }
            if (m.name != null && m.hasOwnProperty("name"))
                w.uint32(50).string(m.name);
            if (m.avatar_url != null && m.hasOwnProperty("avatar_url"))
                w.uint32(58).string(m.avatar_url);
            if (m.description != null && m.hasOwnProperty("description"))
                w.uint32(66).string(m.description);
            return w;
        };

        CreateConversationV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.CreateConversationV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_type = r.int32();
                    break;
                case 2:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.participants.push(r.int64());
                    } else
                        m.participants.push(r.int64());
                    break;
                case 3:
                    m.persistent = r.bool();
                    break;
                case 4:
                    m.idempotent_id = r.string();
                    break;
                case 5:
                    if (!(m.sec_participants && m.sec_participants.length))
                        m.sec_participants = [];
                    m.sec_participants.push(r.string());
                    break;
                case 6:
                    m.name = r.string();
                    break;
                case 7:
                    m.avatar_url = r.string();
                    break;
                case 8:
                    m.description = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CreateConversationV2RequestBody;
    })();

    im_proto.CreateConversationV2ResponseBody = (function() {

        function CreateConversationV2ResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CreateConversationV2ResponseBody.prototype.conversation = null;
        CreateConversationV2ResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CreateConversationV2ResponseBody.prototype.check_message = "";
        CreateConversationV2ResponseBody.prototype.extra_info = "";
        CreateConversationV2ResponseBody.prototype.status = 0;

        CreateConversationV2ResponseBody.create = function create(properties) {
            return new CreateConversationV2ResponseBody(properties);
        };

        CreateConversationV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation != null && m.hasOwnProperty("conversation"))
                $root.im_proto.ConversationInfoV2.encode(m.conversation, w.uint32(10).fork()).ldelim();
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(16).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(26).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(34).string(m.extra_info);
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(40).int32(m.status);
            return w;
        };

        CreateConversationV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.CreateConversationV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation = $root.im_proto.ConversationInfoV2.decode(r, r.uint32());
                    break;
                case 2:
                    m.check_code = r.int64();
                    break;
                case 3:
                    m.check_message = r.string();
                    break;
                case 4:
                    m.extra_info = r.string();
                    break;
                case 5:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CreateConversationV2ResponseBody;
    })();

    im_proto.SendUserActionRequestBody = (function() {

        function SendUserActionRequestBody(p) {
            this.extra = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SendUserActionRequestBody.prototype.conversation_id = "";
        SendUserActionRequestBody.prototype.conversation_type = 0;
        SendUserActionRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendUserActionRequestBody.prototype.action_type = 0;
        SendUserActionRequestBody.prototype.extra = $util.emptyObject;

        SendUserActionRequestBody.create = function create(properties) {
            return new SendUserActionRequestBody(properties);
        };

        SendUserActionRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(24).int64(m.conversation_short_id);
            if (m.action_type != null && m.hasOwnProperty("action_type"))
                w.uint32(32).int32(m.action_type);
            if (m.extra != null && m.hasOwnProperty("extra")) {
                for (var ks = Object.keys(m.extra), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(10).string(ks[i]).uint32(18).string(m.extra[ks[i]]).ldelim();
                }
            }
            return w;
        };

        SendUserActionRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SendUserActionRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.conversation_short_id = r.int64();
                    break;
                case 4:
                    m.action_type = r.int32();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.extra === $util.emptyObject)
                        m.extra = {};
                    k = r.string();
                    r.pos++;
                    m.extra[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SendUserActionRequestBody;
    })();

    im_proto.SendUserActionResponseBody = (function() {

        function SendUserActionResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SendUserActionResponseBody.create = function create(properties) {
            return new SendUserActionResponseBody(properties);
        };

        SendUserActionResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        SendUserActionResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SendUserActionResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SendUserActionResponseBody;
    })();

    im_proto.SendInputStatusRequestBody = (function() {

        function SendInputStatusRequestBody(p) {
            this.extra = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SendInputStatusRequestBody.prototype.conversation_id = "";
        SendInputStatusRequestBody.prototype.conversation_type = 0;
        SendInputStatusRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendInputStatusRequestBody.prototype.status = 0;
        SendInputStatusRequestBody.prototype.extra = $util.emptyObject;

        SendInputStatusRequestBody.create = function create(properties) {
            return new SendInputStatusRequestBody(properties);
        };

        SendInputStatusRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(24).int64(m.conversation_short_id);
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(32).int32(m.status);
            if (m.extra != null && m.hasOwnProperty("extra")) {
                for (var ks = Object.keys(m.extra), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(10).string(ks[i]).uint32(18).string(m.extra[ks[i]]).ldelim();
                }
            }
            return w;
        };

        SendInputStatusRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SendInputStatusRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.conversation_short_id = r.int64();
                    break;
                case 4:
                    m.status = r.int32();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.extra === $util.emptyObject)
                        m.extra = {};
                    k = r.string();
                    r.pos++;
                    m.extra[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SendInputStatusRequestBody;
    })();

    im_proto.SetConversationInfoRequestBody = (function() {

        function SetConversationInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationInfoRequestBody.prototype.conversation_id = "";
        SetConversationInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationInfoRequestBody.prototype.conversation_type = 0;
        SetConversationInfoRequestBody.prototype.ext = $util.emptyObject;

        SetConversationInfoRequestBody.create = function create(properties) {
            return new SetConversationInfoRequestBody(properties);
        };

        SetConversationInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        SetConversationInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationInfoRequestBody;
    })();

    im_proto.SetConversationInfoResponseBody = (function() {

        function SetConversationInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationInfoResponseBody.prototype.conversation = null;
        SetConversationInfoResponseBody.prototype.status = 0;
        SetConversationInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationInfoResponseBody.prototype.check_message = "";
        SetConversationInfoResponseBody.prototype.extra_info = "";

        SetConversationInfoResponseBody.create = function create(properties) {
            return new SetConversationInfoResponseBody(properties);
        };

        SetConversationInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation != null && m.hasOwnProperty("conversation"))
                $root.im_proto.ConversationInfo.encode(m.conversation, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        SetConversationInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation = $root.im_proto.ConversationInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationInfoResponseBody;
    })();

    im_proto.DeleteConversationRequestBody = (function() {

        function DeleteConversationRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteConversationRequestBody.prototype.conversation_id = "";
        DeleteConversationRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteConversationRequestBody.prototype.conversation_type = 0;
        DeleteConversationRequestBody.prototype.last_message_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        DeleteConversationRequestBody.create = function create(properties) {
            return new DeleteConversationRequestBody(properties);
        };

        DeleteConversationRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.last_message_index != null && m.hasOwnProperty("last_message_index"))
                w.uint32(32).int64(m.last_message_index);
            return w;
        };

        DeleteConversationRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteConversationRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.last_message_index = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteConversationRequestBody;
    })();

    im_proto.DeleteMessageRequestBody = (function() {

        function DeleteMessageRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteMessageRequestBody.prototype.conversation_id = "";
        DeleteMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteMessageRequestBody.prototype.conversation_type = 0;
        DeleteMessageRequestBody.prototype.message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        DeleteMessageRequestBody.create = function create(properties) {
            return new DeleteMessageRequestBody(properties);
        };

        DeleteMessageRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.message_id != null && m.hasOwnProperty("message_id"))
                w.uint32(32).int64(m.message_id);
            return w;
        };

        DeleteMessageRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteMessageRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.message_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteMessageRequestBody;
    })();

    im_proto.MarkConversationReadRequestBody = (function() {

        function MarkConversationReadRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkConversationReadRequestBody.prototype.conversation_id = "";
        MarkConversationReadRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MarkConversationReadRequestBody.prototype.conversation_type = 0;
        MarkConversationReadRequestBody.prototype.read_message_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MarkConversationReadRequestBody.create = function create(properties) {
            return new MarkConversationReadRequestBody(properties);
        };

        MarkConversationReadRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.read_message_index != null && m.hasOwnProperty("read_message_index"))
                w.uint32(32).int64(m.read_message_index);
            return w;
        };

        MarkConversationReadRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkConversationReadRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.read_message_index = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkConversationReadRequestBody;
    })();

    im_proto.SendMessageRequestBody = (function() {

        function SendMessageRequestBody(p) {
            this.ext = {};
            this.mentioned_users = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SendMessageRequestBody.prototype.conversation_id = "";
        SendMessageRequestBody.prototype.conversation_type = 0;
        SendMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendMessageRequestBody.prototype.content = "";
        SendMessageRequestBody.prototype.ext = $util.emptyObject;
        SendMessageRequestBody.prototype.message_type = 0;
        SendMessageRequestBody.prototype.ticket = "";
        SendMessageRequestBody.prototype.client_message_id = "";
        SendMessageRequestBody.prototype.mentioned_users = $util.emptyArray;

        SendMessageRequestBody.create = function create(properties) {
            return new SendMessageRequestBody(properties);
        };

        SendMessageRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(24).int64(m.conversation_short_id);
            if (m.content != null && m.hasOwnProperty("content"))
                w.uint32(34).string(m.content);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            if (m.message_type != null && m.hasOwnProperty("message_type"))
                w.uint32(48).int32(m.message_type);
            if (m.ticket != null && m.hasOwnProperty("ticket"))
                w.uint32(58).string(m.ticket);
            if (m.client_message_id != null && m.hasOwnProperty("client_message_id"))
                w.uint32(66).string(m.client_message_id);
            if (m.mentioned_users != null && m.mentioned_users.length) {
                for (var i = 0; i < m.mentioned_users.length; ++i)
                    w.uint32(72).int64(m.mentioned_users[i]);
            }
            return w;
        };

        SendMessageRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SendMessageRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.conversation_short_id = r.int64();
                    break;
                case 4:
                    m.content = r.string();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                case 6:
                    m.message_type = r.int32();
                    break;
                case 7:
                    m.ticket = r.string();
                    break;
                case 8:
                    m.client_message_id = r.string();
                    break;
                case 9:
                    if (!(m.mentioned_users && m.mentioned_users.length))
                        m.mentioned_users = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.mentioned_users.push(r.int64());
                    } else
                        m.mentioned_users.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SendMessageRequestBody;
    })();

    im_proto.SendMessageResponseBody = (function() {

        function SendMessageResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SendMessageResponseBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendMessageResponseBody.prototype.extra_info = "";
        SendMessageResponseBody.prototype.status = 0;
        SendMessageResponseBody.prototype.client_message_id = "";
        SendMessageResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendMessageResponseBody.prototype.check_message = "";

        SendMessageResponseBody.create = function create(properties) {
            return new SendMessageResponseBody(properties);
        };

        SendMessageResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.server_message_id != null && m.hasOwnProperty("server_message_id"))
                w.uint32(8).int64(m.server_message_id);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(18).string(m.extra_info);
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(24).int32(m.status);
            if (m.client_message_id != null && m.hasOwnProperty("client_message_id"))
                w.uint32(34).string(m.client_message_id);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(40).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(50).string(m.check_message);
            return w;
        };

        SendMessageResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SendMessageResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.server_message_id = r.int64();
                    break;
                case 2:
                    m.extra_info = r.string();
                    break;
                case 3:
                    m.status = r.int32();
                    break;
                case 4:
                    m.client_message_id = r.string();
                    break;
                case 5:
                    m.check_code = r.int64();
                    break;
                case 6:
                    m.check_message = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SendMessageResponseBody;
    })();

    im_proto.ModifyMessageRequestBody = (function() {

        function ModifyMessageRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ModifyMessageRequestBody.prototype.conversation_id = "";
        ModifyMessageRequestBody.prototype.conversation_type = 0;
        ModifyMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyMessageRequestBody.prototype.server_message_id = "";
        ModifyMessageRequestBody.prototype.ext = $util.emptyObject;
        ModifyMessageRequestBody.prototype.ticket = "";

        ModifyMessageRequestBody.create = function create(properties) {
            return new ModifyMessageRequestBody(properties);
        };

        ModifyMessageRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(24).int64(m.conversation_short_id);
            if (m.server_message_id != null && m.hasOwnProperty("server_message_id"))
                w.uint32(34).string(m.server_message_id);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            if (m.ticket != null && m.hasOwnProperty("ticket"))
                w.uint32(50).string(m.ticket);
            return w;
        };

        ModifyMessageRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ModifyMessageRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.conversation_short_id = r.int64();
                    break;
                case 4:
                    m.server_message_id = r.string();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                case 6:
                    m.ticket = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ModifyMessageRequestBody;
    })();

    im_proto.ModifyMessageResponseBody = (function() {

        function ModifyMessageResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ModifyMessageResponseBody.create = function create(properties) {
            return new ModifyMessageResponseBody(properties);
        };

        ModifyMessageResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        ModifyMessageResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ModifyMessageResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ModifyMessageResponseBody;
    })();

    im_proto.NewMessageNotifyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "PER_USER"] = 1;
        values[valuesById[2] = "PER_CONVERSATION"] = 2;
        return values;
    })();

    im_proto.NewMessageNotify = (function() {

        function NewMessageNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        NewMessageNotify.prototype.conversation_id = "";
        NewMessageNotify.prototype.conversation_type = 0;
        NewMessageNotify.prototype.notify_type = 1;
        NewMessageNotify.prototype.message = null;
        NewMessageNotify.prototype.previous_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        NewMessageNotify.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        NewMessageNotify.prototype.index_in_conversation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        NewMessageNotify.create = function create(properties) {
            return new NewMessageNotify(properties);
        };

        NewMessageNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(18).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.notify_type != null && m.hasOwnProperty("notify_type"))
                w.uint32(32).int32(m.notify_type);
            if (m.message != null && m.hasOwnProperty("message"))
                $root.im_proto.MessageBody.encode(m.message, w.uint32(42).fork()).ldelim();
            if (m.previous_cursor != null && m.hasOwnProperty("previous_cursor"))
                w.uint32(48).int64(m.previous_cursor);
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(56).int64(m.next_cursor);
            if (m.index_in_conversation != null && m.hasOwnProperty("index_in_conversation"))
                w.uint32(64).int64(m.index_in_conversation);
            return w;
        };

        NewMessageNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.NewMessageNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.conversation_id = r.string();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.notify_type = r.int32();
                    break;
                case 5:
                    m.message = $root.im_proto.MessageBody.decode(r, r.uint32());
                    break;
                case 6:
                    m.previous_cursor = r.int64();
                    break;
                case 7:
                    m.next_cursor = r.int64();
                    break;
                case 8:
                    m.index_in_conversation = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return NewMessageNotify;
    })();

    im_proto.MarkConversationReadNotify = (function() {

        function MarkConversationReadNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkConversationReadNotify.prototype.conversation_id = "";
        MarkConversationReadNotify.prototype.conversation_type = 0;
        MarkConversationReadNotify.prototype.read_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MarkConversationReadNotify.create = function create(properties) {
            return new MarkConversationReadNotify(properties);
        };

        MarkConversationReadNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(16).int32(m.conversation_type);
            if (m.read_index != null && m.hasOwnProperty("read_index"))
                w.uint32(24).int64(m.read_index);
            return w;
        };

        MarkConversationReadNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkConversationReadNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_type = r.int32();
                    break;
                case 3:
                    m.read_index = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkConversationReadNotify;
    })();

    im_proto.ConversationInfoUpdatedNotify = (function() {

        function ConversationInfoUpdatedNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationInfoUpdatedNotify.prototype.conversation = null;

        ConversationInfoUpdatedNotify.create = function create(properties) {
            return new ConversationInfoUpdatedNotify(properties);
        };

        ConversationInfoUpdatedNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation != null && m.hasOwnProperty("conversation"))
                $root.im_proto.ConversationInfo.encode(m.conversation, w.uint32(10).fork()).ldelim();
            return w;
        };

        ConversationInfoUpdatedNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationInfoUpdatedNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation = $root.im_proto.ConversationInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationInfoUpdatedNotify;
    })();

    im_proto.GetConversationInfoRequestBody = (function() {

        function GetConversationInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoRequestBody.prototype.conversation_id = "";
        GetConversationInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetConversationInfoRequestBody.prototype.conversation_type = 0;

        GetConversationInfoRequestBody.create = function create(properties) {
            return new GetConversationInfoRequestBody(properties);
        };

        GetConversationInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            return w;
        };

        GetConversationInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoRequestBody;
    })();

    im_proto.GetConversationInfoResponseBody = (function() {

        function GetConversationInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoResponseBody.prototype.conversation_info = null;

        GetConversationInfoResponseBody.create = function create(properties) {
            return new GetConversationInfoResponseBody(properties);
        };

        GetConversationInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info != null && m.hasOwnProperty("conversation_info"))
                $root.im_proto.ConversationInfo.encode(m.conversation_info, w.uint32(10).fork()).ldelim();
            return w;
        };

        GetConversationInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_info = $root.im_proto.ConversationInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoResponseBody;
    })();

    im_proto.ConversationsPerUserByFavoriteV2RequestBody = (function() {

        function ConversationsPerUserByFavoriteV2RequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationsPerUserByFavoriteV2RequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationsPerUserByFavoriteV2RequestBody.prototype.limit = 500;

        ConversationsPerUserByFavoriteV2RequestBody.create = function create(properties) {
            return new ConversationsPerUserByFavoriteV2RequestBody(properties);
        };

        ConversationsPerUserByFavoriteV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            if (m.limit != null && m.hasOwnProperty("limit"))
                w.uint32(16).int32(m.limit);
            return w;
        };

        ConversationsPerUserByFavoriteV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationsPerUserByFavoriteV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                case 2:
                    m.limit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationsPerUserByFavoriteV2RequestBody;
    })();

    im_proto.ConversationsPerUserByTopV2RequestBody = (function() {

        function ConversationsPerUserByTopV2RequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationsPerUserByTopV2RequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationsPerUserByTopV2RequestBody.prototype.limit = 500;

        ConversationsPerUserByTopV2RequestBody.create = function create(properties) {
            return new ConversationsPerUserByTopV2RequestBody(properties);
        };

        ConversationsPerUserByTopV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            if (m.limit != null && m.hasOwnProperty("limit"))
                w.uint32(16).int32(m.limit);
            return w;
        };

        ConversationsPerUserByTopV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationsPerUserByTopV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                case 2:
                    m.limit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationsPerUserByTopV2RequestBody;
    })();

    im_proto.GetConversationInfoV2RequestBody = (function() {

        function GetConversationInfoV2RequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoV2RequestBody.prototype.conversation_id = "";
        GetConversationInfoV2RequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetConversationInfoV2RequestBody.prototype.conversation_type = 0;

        GetConversationInfoV2RequestBody.create = function create(properties) {
            return new GetConversationInfoV2RequestBody(properties);
        };

        GetConversationInfoV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            return w;
        };

        GetConversationInfoV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoV2RequestBody;
    })();

    im_proto.GetConversationInfoV2ResponseBody = (function() {

        function GetConversationInfoV2ResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoV2ResponseBody.prototype.conversation_info = null;

        GetConversationInfoV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoV2ResponseBody(properties);
        };

        GetConversationInfoV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info != null && m.hasOwnProperty("conversation_info"))
                $root.im_proto.ConversationInfoV2.encode(m.conversation_info, w.uint32(10).fork()).ldelim();
            return w;
        };

        GetConversationInfoV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_info = $root.im_proto.ConversationInfoV2.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoV2ResponseBody;
    })();

    im_proto.GetConversationInfoListRequestBody = (function() {

        function GetConversationInfoListRequestBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListRequestBody.prototype.conversation_info_list = $util.emptyArray;

        GetConversationInfoListRequestBody.create = function create(properties) {
            return new GetConversationInfoListRequestBody(properties);
        };

        GetConversationInfoListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.GetConversationInfoRequestBody.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationInfoListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.GetConversationInfoRequestBody.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListRequestBody;
    })();

    im_proto.GetConversationInfoListResponseBody = (function() {

        function GetConversationInfoListResponseBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListResponseBody.prototype.conversation_info_list = $util.emptyArray;

        GetConversationInfoListResponseBody.create = function create(properties) {
            return new GetConversationInfoListResponseBody(properties);
        };

        GetConversationInfoListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.ConversationInfo.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationInfoListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.ConversationInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListResponseBody;
    })();

    im_proto.GetConversationInfoListV2RequestBody = (function() {

        function GetConversationInfoListV2RequestBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListV2RequestBody.prototype.conversation_info_list = $util.emptyArray;

        GetConversationInfoListV2RequestBody.create = function create(properties) {
            return new GetConversationInfoListV2RequestBody(properties);
        };

        GetConversationInfoListV2RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.GetConversationInfoV2RequestBody.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationInfoListV2RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListV2RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.GetConversationInfoV2RequestBody.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListV2RequestBody;
    })();

    im_proto.GetConversationInfoListV2ResponseBody = (function() {

        function GetConversationInfoListV2ResponseBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListV2ResponseBody.prototype.conversation_info_list = $util.emptyArray;

        GetConversationInfoListV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoListV2ResponseBody(properties);
        };

        GetConversationInfoListV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationInfoListV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.ConversationInfoV2.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListV2ResponseBody;
    })();

    im_proto.GetConversationInfoListByFavoriteV2ResponseBody = (function() {

        function GetConversationInfoListByFavoriteV2ResponseBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListByFavoriteV2ResponseBody.prototype.conversation_info_list = $util.emptyArray;
        GetConversationInfoListByFavoriteV2ResponseBody.prototype.has_more = false;
        GetConversationInfoListByFavoriteV2ResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GetConversationInfoListByFavoriteV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoListByFavoriteV2ResponseBody(properties);
        };

        GetConversationInfoListByFavoriteV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(16).bool(m.has_more);
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(24).int64(m.next_cursor);
            return w;
        };

        GetConversationInfoListByFavoriteV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListByFavoriteV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.ConversationInfoV2.decode(r, r.uint32()));
                    break;
                case 2:
                    m.has_more = r.bool();
                    break;
                case 3:
                    m.next_cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListByFavoriteV2ResponseBody;
    })();

    im_proto.GetConversationInfoListByTopV2ResponseBody = (function() {

        function GetConversationInfoListByTopV2ResponseBody(p) {
            this.conversation_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationInfoListByTopV2ResponseBody.prototype.conversation_info_list = $util.emptyArray;
        GetConversationInfoListByTopV2ResponseBody.prototype.has_more = false;
        GetConversationInfoListByTopV2ResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GetConversationInfoListByTopV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoListByTopV2ResponseBody(properties);
        };

        GetConversationInfoListByTopV2ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_info_list != null && m.conversation_info_list.length) {
                for (var i = 0; i < m.conversation_info_list.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(m.conversation_info_list[i], w.uint32(10).fork()).ldelim();
            }
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(16).bool(m.has_more);
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(24).int64(m.next_cursor);
            return w;
        };

        GetConversationInfoListByTopV2ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationInfoListByTopV2ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_info_list && m.conversation_info_list.length))
                        m.conversation_info_list = [];
                    m.conversation_info_list.push($root.im_proto.ConversationInfoV2.decode(r, r.uint32()));
                    break;
                case 2:
                    m.has_more = r.bool();
                    break;
                case 3:
                    m.next_cursor = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationInfoListByTopV2ResponseBody;
    })();

    im_proto.RecallMessageRequestBody = (function() {

        function RecallMessageRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RecallMessageRequestBody.prototype.conversation_id = "";
        RecallMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RecallMessageRequestBody.prototype.conversation_type = 0;
        RecallMessageRequestBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RecallMessageRequestBody.create = function create(properties) {
            return new RecallMessageRequestBody(properties);
        };

        RecallMessageRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.server_message_id != null && m.hasOwnProperty("server_message_id"))
                w.uint32(32).int64(m.server_message_id);
            return w;
        };

        RecallMessageRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.RecallMessageRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.server_message_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecallMessageRequestBody;
    })();

    im_proto.ConversationAddParticipantsRequestBody = (function() {

        function ConversationAddParticipantsRequestBody(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationAddParticipantsRequestBody.prototype.conversation_id = "";
        ConversationAddParticipantsRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationAddParticipantsRequestBody.prototype.conversation_type = 0;
        ConversationAddParticipantsRequestBody.prototype.participants = $util.emptyArray;

        ConversationAddParticipantsRequestBody.create = function create(properties) {
            return new ConversationAddParticipantsRequestBody(properties);
        };

        ConversationAddParticipantsRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    w.uint32(32).int64(m.participants[i]);
            }
            return w;
        };

        ConversationAddParticipantsRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationAddParticipantsRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.participants.push(r.int64());
                    } else
                        m.participants.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationAddParticipantsRequestBody;
    })();

    im_proto.SecUidPair = (function() {

        function SecUidPair(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SecUidPair.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SecUidPair.prototype.sec_uid = "";

        SecUidPair.create = function create(properties) {
            return new SecUidPair(properties);
        };

        SecUidPair.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && m.hasOwnProperty("uid"))
                w.uint32(8).int64(m.uid);
            if (m.sec_uid != null && m.hasOwnProperty("sec_uid"))
                w.uint32(18).string(m.sec_uid);
            return w;
        };

        SecUidPair.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SecUidPair();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int64();
                    break;
                case 2:
                    m.sec_uid = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SecUidPair;
    })();

    im_proto.ConversationAddParticipantsResponseBody = (function() {

        function ConversationAddParticipantsResponseBody(p) {
            this.success_participants = [];
            this.failed_participants = [];
            this.sec_success_participants = [];
            this.sec_failed_participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationAddParticipantsResponseBody.prototype.success_participants = $util.emptyArray;
        ConversationAddParticipantsResponseBody.prototype.failed_participants = $util.emptyArray;
        ConversationAddParticipantsResponseBody.prototype.status = 0;
        ConversationAddParticipantsResponseBody.prototype.extra_info = "";
        ConversationAddParticipantsResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationAddParticipantsResponseBody.prototype.check_message = "";
        ConversationAddParticipantsResponseBody.prototype.sec_success_participants = $util.emptyArray;
        ConversationAddParticipantsResponseBody.prototype.sec_failed_participants = $util.emptyArray;

        ConversationAddParticipantsResponseBody.create = function create(properties) {
            return new ConversationAddParticipantsResponseBody(properties);
        };

        ConversationAddParticipantsResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.success_participants != null && m.success_participants.length) {
                for (var i = 0; i < m.success_participants.length; ++i)
                    w.uint32(8).int64(m.success_participants[i]);
            }
            if (m.failed_participants != null && m.failed_participants.length) {
                for (var i = 0; i < m.failed_participants.length; ++i)
                    w.uint32(16).int64(m.failed_participants[i]);
            }
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(24).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(34).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(40).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(50).string(m.check_message);
            if (m.sec_success_participants != null && m.sec_success_participants.length) {
                for (var i = 0; i < m.sec_success_participants.length; ++i)
                    $root.im_proto.SecUidPair.encode(m.sec_success_participants[i], w.uint32(58).fork()).ldelim();
            }
            if (m.sec_failed_participants != null && m.sec_failed_participants.length) {
                for (var i = 0; i < m.sec_failed_participants.length; ++i)
                    $root.im_proto.SecUidPair.encode(m.sec_failed_participants[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        ConversationAddParticipantsResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationAddParticipantsResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.success_participants && m.success_participants.length))
                        m.success_participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.success_participants.push(r.int64());
                    } else
                        m.success_participants.push(r.int64());
                    break;
                case 2:
                    if (!(m.failed_participants && m.failed_participants.length))
                        m.failed_participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.failed_participants.push(r.int64());
                    } else
                        m.failed_participants.push(r.int64());
                    break;
                case 3:
                    m.status = r.int32();
                    break;
                case 4:
                    m.extra_info = r.string();
                    break;
                case 5:
                    m.check_code = r.int64();
                    break;
                case 6:
                    m.check_message = r.string();
                    break;
                case 7:
                    if (!(m.sec_success_participants && m.sec_success_participants.length))
                        m.sec_success_participants = [];
                    m.sec_success_participants.push($root.im_proto.SecUidPair.decode(r, r.uint32()));
                    break;
                case 8:
                    if (!(m.sec_failed_participants && m.sec_failed_participants.length))
                        m.sec_failed_participants = [];
                    m.sec_failed_participants.push($root.im_proto.SecUidPair.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationAddParticipantsResponseBody;
    })();

    im_proto.ConversationRemoveParticipantsRequestBody = (function() {

        function ConversationRemoveParticipantsRequestBody(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationRemoveParticipantsRequestBody.prototype.conversation_id = "";
        ConversationRemoveParticipantsRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationRemoveParticipantsRequestBody.prototype.conversation_type = 0;
        ConversationRemoveParticipantsRequestBody.prototype.participants = $util.emptyArray;

        ConversationRemoveParticipantsRequestBody.create = function create(properties) {
            return new ConversationRemoveParticipantsRequestBody(properties);
        };

        ConversationRemoveParticipantsRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    w.uint32(32).int64(m.participants[i]);
            }
            return w;
        };

        ConversationRemoveParticipantsRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationRemoveParticipantsRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.participants.push(r.int64());
                    } else
                        m.participants.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationRemoveParticipantsRequestBody;
    })();

    im_proto.ConversationRemoveParticipantsResponseBody = (function() {

        function ConversationRemoveParticipantsResponseBody(p) {
            this.failed_participants = [];
            this.failed_sec_participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationRemoveParticipantsResponseBody.prototype.failed_participants = $util.emptyArray;
        ConversationRemoveParticipantsResponseBody.prototype.status = 0;
        ConversationRemoveParticipantsResponseBody.prototype.extra_info = "";
        ConversationRemoveParticipantsResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationRemoveParticipantsResponseBody.prototype.check_message = "";
        ConversationRemoveParticipantsResponseBody.prototype.failed_sec_participants = $util.emptyArray;

        ConversationRemoveParticipantsResponseBody.create = function create(properties) {
            return new ConversationRemoveParticipantsResponseBody(properties);
        };

        ConversationRemoveParticipantsResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.failed_participants != null && m.failed_participants.length) {
                for (var i = 0; i < m.failed_participants.length; ++i)
                    w.uint32(8).int64(m.failed_participants[i]);
            }
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(26).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(32).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(42).string(m.check_message);
            if (m.failed_sec_participants != null && m.failed_sec_participants.length) {
                for (var i = 0; i < m.failed_sec_participants.length; ++i)
                    $root.im_proto.SecUidPair.encode(m.failed_sec_participants[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        ConversationRemoveParticipantsResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationRemoveParticipantsResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.failed_participants && m.failed_participants.length))
                        m.failed_participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.failed_participants.push(r.int64());
                    } else
                        m.failed_participants.push(r.int64());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.extra_info = r.string();
                    break;
                case 4:
                    m.check_code = r.int64();
                    break;
                case 5:
                    m.check_message = r.string();
                    break;
                case 6:
                    if (!(m.failed_sec_participants && m.failed_sec_participants.length))
                        m.failed_sec_participants = [];
                    m.failed_sec_participants.push($root.im_proto.SecUidPair.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationRemoveParticipantsResponseBody;
    })();

    im_proto.ConversationLeaveRequestBody = (function() {

        function ConversationLeaveRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationLeaveRequestBody.prototype.conversation_id = "";
        ConversationLeaveRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationLeaveRequestBody.prototype.conversation_type = 0;

        ConversationLeaveRequestBody.create = function create(properties) {
            return new ConversationLeaveRequestBody(properties);
        };

        ConversationLeaveRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            return w;
        };

        ConversationLeaveRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationLeaveRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationLeaveRequestBody;
    })();

    im_proto.ConversationSetRoleRequestBody = (function() {

        function ConversationSetRoleRequestBody(p) {
            this.roles = {};
            this.sec_roles = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationSetRoleRequestBody.prototype.conversation_id = "";
        ConversationSetRoleRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSetRoleRequestBody.prototype.conversation_type = 0;
        ConversationSetRoleRequestBody.prototype.roles = $util.emptyObject;
        ConversationSetRoleRequestBody.prototype.sec_roles = $util.emptyObject;

        ConversationSetRoleRequestBody.create = function create(properties) {
            return new ConversationSetRoleRequestBody(properties);
        };

        ConversationSetRoleRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.roles != null && m.hasOwnProperty("roles")) {
                for (var ks = Object.keys(m.roles), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(8).int64(ks[i]).uint32(16).int32(m.roles[ks[i]]).ldelim();
                }
            }
            if (m.sec_roles != null && m.hasOwnProperty("sec_roles")) {
                for (var ks = Object.keys(m.sec_roles), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(10).string(ks[i]).uint32(16).int32(m.sec_roles[ks[i]]).ldelim();
                }
            }
            return w;
        };

        ConversationSetRoleRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationSetRoleRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.roles === $util.emptyObject)
                        m.roles = {};
                    k = r.int64();
                    r.pos++;
                    m.roles[typeof k === "object" ? $util.longToHash(k) : k] = r.int32();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.sec_roles === $util.emptyObject)
                        m.sec_roles = {};
                    k = r.string();
                    r.pos++;
                    m.sec_roles[k] = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationSetRoleRequestBody;
    })();

    im_proto.ConversationSetRoleResponseBody = (function() {

        function ConversationSetRoleResponseBody(p) {
            this.success_participants = [];
            this.failed_participants = [];
            this.success_sec_participants = [];
            this.failed_sec_participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationSetRoleResponseBody.prototype.success_participants = $util.emptyArray;
        ConversationSetRoleResponseBody.prototype.failed_participants = $util.emptyArray;
        ConversationSetRoleResponseBody.prototype.status = 0;
        ConversationSetRoleResponseBody.prototype.extra_info = "";
        ConversationSetRoleResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationSetRoleResponseBody.prototype.check_message = "";
        ConversationSetRoleResponseBody.prototype.success_sec_participants = $util.emptyArray;
        ConversationSetRoleResponseBody.prototype.failed_sec_participants = $util.emptyArray;

        ConversationSetRoleResponseBody.create = function create(properties) {
            return new ConversationSetRoleResponseBody(properties);
        };

        ConversationSetRoleResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.success_participants != null && m.success_participants.length) {
                for (var i = 0; i < m.success_participants.length; ++i)
                    w.uint32(8).int64(m.success_participants[i]);
            }
            if (m.failed_participants != null && m.failed_participants.length) {
                for (var i = 0; i < m.failed_participants.length; ++i)
                    w.uint32(16).int64(m.failed_participants[i]);
            }
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(24).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(34).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(40).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(50).string(m.check_message);
            if (m.success_sec_participants != null && m.success_sec_participants.length) {
                for (var i = 0; i < m.success_sec_participants.length; ++i)
                    w.uint32(58).string(m.success_sec_participants[i]);
            }
            if (m.failed_sec_participants != null && m.failed_sec_participants.length) {
                for (var i = 0; i < m.failed_sec_participants.length; ++i)
                    w.uint32(66).string(m.failed_sec_participants[i]);
            }
            return w;
        };

        ConversationSetRoleResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationSetRoleResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.success_participants && m.success_participants.length))
                        m.success_participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.success_participants.push(r.int64());
                    } else
                        m.success_participants.push(r.int64());
                    break;
                case 2:
                    if (!(m.failed_participants && m.failed_participants.length))
                        m.failed_participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.failed_participants.push(r.int64());
                    } else
                        m.failed_participants.push(r.int64());
                    break;
                case 3:
                    m.status = r.int32();
                    break;
                case 4:
                    m.extra_info = r.string();
                    break;
                case 5:
                    m.check_code = r.int64();
                    break;
                case 6:
                    m.check_message = r.string();
                    break;
                case 7:
                    if (!(m.success_sec_participants && m.success_sec_participants.length))
                        m.success_sec_participants = [];
                    m.success_sec_participants.push(r.string());
                    break;
                case 8:
                    if (!(m.failed_sec_participants && m.failed_sec_participants.length))
                        m.failed_sec_participants = [];
                    m.failed_sec_participants.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationSetRoleResponseBody;
    })();

    im_proto.ConversationParticipantsListRequestBody = (function() {

        function ConversationParticipantsListRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationParticipantsListRequestBody.prototype.conversation_id = "";
        ConversationParticipantsListRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationParticipantsListRequestBody.prototype.conversation_type = 0;
        ConversationParticipantsListRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ConversationParticipantsListRequestBody.prototype.limit = 100;

        ConversationParticipantsListRequestBody.create = function create(properties) {
            return new ConversationParticipantsListRequestBody(properties);
        };

        ConversationParticipantsListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(32).int64(m.cursor);
            if (m.limit != null && m.hasOwnProperty("limit"))
                w.uint32(40).int32(m.limit);
            return w;
        };

        ConversationParticipantsListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationParticipantsListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.cursor = r.int64();
                    break;
                case 5:
                    m.limit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationParticipantsListRequestBody;
    })();

    im_proto.ConversationParticipantsListResponseBody = (function() {

        function ConversationParticipantsListResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ConversationParticipantsListResponseBody.prototype.participants_page = null;

        ConversationParticipantsListResponseBody.create = function create(properties) {
            return new ConversationParticipantsListResponseBody(properties);
        };

        ConversationParticipantsListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.participants_page != null && m.hasOwnProperty("participants_page"))
                $root.im_proto.ParticipantsPage.encode(m.participants_page, w.uint32(10).fork()).ldelim();
            return w;
        };

        ConversationParticipantsListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ConversationParticipantsListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.participants_page = $root.im_proto.ParticipantsPage.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ConversationParticipantsListResponseBody;
    })();

    im_proto.MgetConversationParticipantsRequestBody = (function() {

        function MgetConversationParticipantsRequestBody(p) {
            this.participants = [];
            this.sec_participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MgetConversationParticipantsRequestBody.prototype.conversation_id = "";
        MgetConversationParticipantsRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MgetConversationParticipantsRequestBody.prototype.conversation_type = 0;
        MgetConversationParticipantsRequestBody.prototype.participants = $util.emptyArray;
        MgetConversationParticipantsRequestBody.prototype.sec_participants = $util.emptyArray;

        MgetConversationParticipantsRequestBody.create = function create(properties) {
            return new MgetConversationParticipantsRequestBody(properties);
        };

        MgetConversationParticipantsRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    w.uint32(32).int64(m.participants[i]);
            }
            if (m.sec_participants != null && m.sec_participants.length) {
                for (var i = 0; i < m.sec_participants.length; ++i)
                    w.uint32(42).string(m.sec_participants[i]);
            }
            return w;
        };

        MgetConversationParticipantsRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MgetConversationParticipantsRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.participants.push(r.int64());
                    } else
                        m.participants.push(r.int64());
                    break;
                case 5:
                    if (!(m.sec_participants && m.sec_participants.length))
                        m.sec_participants = [];
                    m.sec_participants.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MgetConversationParticipantsRequestBody;
    })();

    im_proto.MgetConversationParticipantsResponseBody = (function() {

        function MgetConversationParticipantsResponseBody(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MgetConversationParticipantsResponseBody.prototype.participants = $util.emptyArray;

        MgetConversationParticipantsResponseBody.create = function create(properties) {
            return new MgetConversationParticipantsResponseBody(properties);
        };

        MgetConversationParticipantsResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    $root.im_proto.Participant.encode(m.participants[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        MgetConversationParticipantsResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MgetConversationParticipantsResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.participants && m.participants.length))
                        m.participants = [];
                    m.participants.push($root.im_proto.Participant.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MgetConversationParticipantsResponseBody;
    })();

    im_proto.UpdateConversationParticipantRequestBody = (function() {

        function UpdateConversationParticipantRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpdateConversationParticipantRequestBody.prototype.conversation_id = "";
        UpdateConversationParticipantRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpdateConversationParticipantRequestBody.prototype.conversation_type = 0;
        UpdateConversationParticipantRequestBody.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpdateConversationParticipantRequestBody.prototype.role = 0;
        UpdateConversationParticipantRequestBody.prototype.alias = "";
        UpdateConversationParticipantRequestBody.prototype.is_alias_set = false;
        UpdateConversationParticipantRequestBody.prototype.sec_uid = "";

        UpdateConversationParticipantRequestBody.create = function create(properties) {
            return new UpdateConversationParticipantRequestBody(properties);
        };

        UpdateConversationParticipantRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.user_id != null && m.hasOwnProperty("user_id"))
                w.uint32(32).int64(m.user_id);
            if (m.role != null && m.hasOwnProperty("role"))
                w.uint32(40).int32(m.role);
            if (m.alias != null && m.hasOwnProperty("alias"))
                w.uint32(50).string(m.alias);
            if (m.is_alias_set != null && m.hasOwnProperty("is_alias_set"))
                w.uint32(56).bool(m.is_alias_set);
            if (m.sec_uid != null && m.hasOwnProperty("sec_uid"))
                w.uint32(66).string(m.sec_uid);
            return w;
        };

        UpdateConversationParticipantRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpdateConversationParticipantRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.user_id = r.int64();
                    break;
                case 5:
                    m.role = r.int32();
                    break;
                case 6:
                    m.alias = r.string();
                    break;
                case 7:
                    m.is_alias_set = r.bool();
                    break;
                case 8:
                    m.sec_uid = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpdateConversationParticipantRequestBody;
    })();

    im_proto.UpdateConversationParticipantResponseBody = (function() {

        function UpdateConversationParticipantResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpdateConversationParticipantResponseBody.prototype.participant = null;
        UpdateConversationParticipantResponseBody.prototype.status = 0;
        UpdateConversationParticipantResponseBody.prototype.extra_info = "";
        UpdateConversationParticipantResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpdateConversationParticipantResponseBody.prototype.check_message = "";

        UpdateConversationParticipantResponseBody.create = function create(properties) {
            return new UpdateConversationParticipantResponseBody(properties);
        };

        UpdateConversationParticipantResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.participant != null && m.hasOwnProperty("participant"))
                $root.im_proto.Participant.encode(m.participant, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(26).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(32).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(42).string(m.check_message);
            return w;
        };

        UpdateConversationParticipantResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpdateConversationParticipantResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.participant = $root.im_proto.Participant.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.extra_info = r.string();
                    break;
                case 4:
                    m.check_code = r.int64();
                    break;
                case 5:
                    m.check_message = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpdateConversationParticipantResponseBody;
    })();

    im_proto.GetGroupInfoRequestBody = (function() {

        function GetGroupInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetGroupInfoRequestBody.prototype.conversation_id = "";
        GetGroupInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetGroupInfoRequestBody.prototype.conversation_type = 0;

        GetGroupInfoRequestBody.create = function create(properties) {
            return new GetGroupInfoRequestBody(properties);
        };

        GetGroupInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            return w;
        };

        GetGroupInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetGroupInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGroupInfoRequestBody;
    })();

    im_proto.GetGroupInfoResponseBody = (function() {

        function GetGroupInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetGroupInfoResponseBody.prototype.group_info = null;

        GetGroupInfoResponseBody.create = function create(properties) {
            return new GetGroupInfoResponseBody(properties);
        };

        GetGroupInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.group_info != null && m.hasOwnProperty("group_info"))
                $root.im_proto.GroupInfo.encode(m.group_info, w.uint32(10).fork()).ldelim();
            return w;
        };

        GetGroupInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetGroupInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.group_info = $root.im_proto.GroupInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGroupInfoResponseBody;
    })();

    im_proto.GetGroupInfoListRequestBody = (function() {

        function GetGroupInfoListRequestBody(p) {
            this.group_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetGroupInfoListRequestBody.prototype.group_info_list = $util.emptyArray;

        GetGroupInfoListRequestBody.create = function create(properties) {
            return new GetGroupInfoListRequestBody(properties);
        };

        GetGroupInfoListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.group_info_list != null && m.group_info_list.length) {
                for (var i = 0; i < m.group_info_list.length; ++i)
                    $root.im_proto.GetGroupInfoRequestBody.encode(m.group_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetGroupInfoListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetGroupInfoListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.group_info_list && m.group_info_list.length))
                        m.group_info_list = [];
                    m.group_info_list.push($root.im_proto.GetGroupInfoRequestBody.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGroupInfoListRequestBody;
    })();

    im_proto.GetGroupInfoListResponseBody = (function() {

        function GetGroupInfoListResponseBody(p) {
            this.group_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetGroupInfoListResponseBody.prototype.group_info_list = $util.emptyArray;

        GetGroupInfoListResponseBody.create = function create(properties) {
            return new GetGroupInfoListResponseBody(properties);
        };

        GetGroupInfoListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.group_info_list != null && m.group_info_list.length) {
                for (var i = 0; i < m.group_info_list.length; ++i)
                    $root.im_proto.GroupInfo.encode(m.group_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetGroupInfoListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetGroupInfoListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.group_info_list && m.group_info_list.length))
                        m.group_info_list = [];
                    m.group_info_list.push($root.im_proto.GroupInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetGroupInfoListResponseBody;
    })();

    im_proto.SetGroupInfoRequestBody = (function() {

        function SetGroupInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetGroupInfoRequestBody.prototype.conversation_id = "";
        SetGroupInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetGroupInfoRequestBody.prototype.conversation_type = 0;
        SetGroupInfoRequestBody.prototype.group_name = "";
        SetGroupInfoRequestBody.prototype.group_desc = "";
        SetGroupInfoRequestBody.prototype.group_icon = "";
        SetGroupInfoRequestBody.prototype.ext = $util.emptyObject;

        SetGroupInfoRequestBody.create = function create(properties) {
            return new SetGroupInfoRequestBody(properties);
        };

        SetGroupInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.group_name != null && m.hasOwnProperty("group_name"))
                w.uint32(42).string(m.group_name);
            if (m.group_desc != null && m.hasOwnProperty("group_desc"))
                w.uint32(50).string(m.group_desc);
            if (m.group_icon != null && m.hasOwnProperty("group_icon"))
                w.uint32(58).string(m.group_icon);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(66).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        SetGroupInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetGroupInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 5:
                    m.group_name = r.string();
                    break;
                case 6:
                    m.group_desc = r.string();
                    break;
                case 7:
                    m.group_icon = r.string();
                    break;
                case 8:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetGroupInfoRequestBody;
    })();

    im_proto.SetGroupInfoResponseBody = (function() {

        function SetGroupInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetGroupInfoResponseBody.prototype.group_info = null;
        SetGroupInfoResponseBody.prototype.status = 0;
        SetGroupInfoResponseBody.prototype.extra_info = "";
        SetGroupInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetGroupInfoResponseBody.prototype.check_message = "";

        SetGroupInfoResponseBody.create = function create(properties) {
            return new SetGroupInfoResponseBody(properties);
        };

        SetGroupInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.group_info != null && m.hasOwnProperty("group_info"))
                $root.im_proto.GroupInfo.encode(m.group_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(26).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(32).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(42).string(m.check_message);
            return w;
        };

        SetGroupInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetGroupInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.group_info = $root.im_proto.GroupInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.extra_info = r.string();
                    break;
                case 4:
                    m.check_code = r.int64();
                    break;
                case 5:
                    m.check_message = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetGroupInfoResponseBody;
    })();

    im_proto.GetConversationCoreInfoRequestBody = (function() {

        function GetConversationCoreInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationCoreInfoRequestBody.prototype.conversation_id = "";
        GetConversationCoreInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetConversationCoreInfoRequestBody.prototype.conversation_type = 0;

        GetConversationCoreInfoRequestBody.create = function create(properties) {
            return new GetConversationCoreInfoRequestBody(properties);
        };

        GetConversationCoreInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            return w;
        };

        GetConversationCoreInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationCoreInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationCoreInfoRequestBody;
    })();

    im_proto.GetConversationCoreInfoResponseBody = (function() {

        function GetConversationCoreInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationCoreInfoResponseBody.prototype.conversation_core_info = null;

        GetConversationCoreInfoResponseBody.create = function create(properties) {
            return new GetConversationCoreInfoResponseBody(properties);
        };

        GetConversationCoreInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_core_info != null && m.hasOwnProperty("conversation_core_info"))
                $root.im_proto.ConversationCoreInfo.encode(m.conversation_core_info, w.uint32(10).fork()).ldelim();
            return w;
        };

        GetConversationCoreInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationCoreInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_core_info = $root.im_proto.ConversationCoreInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationCoreInfoResponseBody;
    })();

    im_proto.GetConversationCoreInfoListRequestBody = (function() {

        function GetConversationCoreInfoListRequestBody(p) {
            this.conversation_core_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationCoreInfoListRequestBody.prototype.conversation_core_info_list = $util.emptyArray;

        GetConversationCoreInfoListRequestBody.create = function create(properties) {
            return new GetConversationCoreInfoListRequestBody(properties);
        };

        GetConversationCoreInfoListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_core_info_list != null && m.conversation_core_info_list.length) {
                for (var i = 0; i < m.conversation_core_info_list.length; ++i)
                    $root.im_proto.GetConversationCoreInfoRequestBody.encode(m.conversation_core_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationCoreInfoListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationCoreInfoListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_core_info_list && m.conversation_core_info_list.length))
                        m.conversation_core_info_list = [];
                    m.conversation_core_info_list.push($root.im_proto.GetConversationCoreInfoRequestBody.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationCoreInfoListRequestBody;
    })();

    im_proto.GetConversationCoreInfoListResponseBody = (function() {

        function GetConversationCoreInfoListResponseBody(p) {
            this.conversation_core_info_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationCoreInfoListResponseBody.prototype.conversation_core_info_list = $util.emptyArray;

        GetConversationCoreInfoListResponseBody.create = function create(properties) {
            return new GetConversationCoreInfoListResponseBody(properties);
        };

        GetConversationCoreInfoListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_core_info_list != null && m.conversation_core_info_list.length) {
                for (var i = 0; i < m.conversation_core_info_list.length; ++i)
                    $root.im_proto.ConversationCoreInfo.encode(m.conversation_core_info_list[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GetConversationCoreInfoListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationCoreInfoListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.conversation_core_info_list && m.conversation_core_info_list.length))
                        m.conversation_core_info_list = [];
                    m.conversation_core_info_list.push($root.im_proto.ConversationCoreInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationCoreInfoListResponseBody;
    })();

    im_proto.SetConversationCoreInfoRequestBody = (function() {

        function SetConversationCoreInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationCoreInfoRequestBody.prototype.conversation_id = "";
        SetConversationCoreInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationCoreInfoRequestBody.prototype.conversation_type = 0;
        SetConversationCoreInfoRequestBody.prototype.name = "";
        SetConversationCoreInfoRequestBody.prototype.desc = "";
        SetConversationCoreInfoRequestBody.prototype.icon = "";
        SetConversationCoreInfoRequestBody.prototype.notice = "";
        SetConversationCoreInfoRequestBody.prototype.is_name_set = false;
        SetConversationCoreInfoRequestBody.prototype.is_desc_set = false;
        SetConversationCoreInfoRequestBody.prototype.is_icon_set = false;
        SetConversationCoreInfoRequestBody.prototype.is_notice_set = false;

        SetConversationCoreInfoRequestBody.create = function create(properties) {
            return new SetConversationCoreInfoRequestBody(properties);
        };

        SetConversationCoreInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.name != null && m.hasOwnProperty("name"))
                w.uint32(34).string(m.name);
            if (m.desc != null && m.hasOwnProperty("desc"))
                w.uint32(42).string(m.desc);
            if (m.icon != null && m.hasOwnProperty("icon"))
                w.uint32(50).string(m.icon);
            if (m.notice != null && m.hasOwnProperty("notice"))
                w.uint32(58).string(m.notice);
            if (m.is_name_set != null && m.hasOwnProperty("is_name_set"))
                w.uint32(64).bool(m.is_name_set);
            if (m.is_desc_set != null && m.hasOwnProperty("is_desc_set"))
                w.uint32(72).bool(m.is_desc_set);
            if (m.is_icon_set != null && m.hasOwnProperty("is_icon_set"))
                w.uint32(80).bool(m.is_icon_set);
            if (m.is_notice_set != null && m.hasOwnProperty("is_notice_set"))
                w.uint32(88).bool(m.is_notice_set);
            return w;
        };

        SetConversationCoreInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationCoreInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.name = r.string();
                    break;
                case 5:
                    m.desc = r.string();
                    break;
                case 6:
                    m.icon = r.string();
                    break;
                case 7:
                    m.notice = r.string();
                    break;
                case 8:
                    m.is_name_set = r.bool();
                    break;
                case 9:
                    m.is_desc_set = r.bool();
                    break;
                case 10:
                    m.is_icon_set = r.bool();
                    break;
                case 11:
                    m.is_notice_set = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationCoreInfoRequestBody;
    })();

    im_proto.SetConversationCoreInfoResponseBody = (function() {

        function SetConversationCoreInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationCoreInfoResponseBody.prototype.conversation_core_info = null;
        SetConversationCoreInfoResponseBody.prototype.status = 0;
        SetConversationCoreInfoResponseBody.prototype.extra_info = "";
        SetConversationCoreInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationCoreInfoResponseBody.prototype.check_message = "";

        SetConversationCoreInfoResponseBody.create = function create(properties) {
            return new SetConversationCoreInfoResponseBody(properties);
        };

        SetConversationCoreInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_core_info != null && m.hasOwnProperty("conversation_core_info"))
                $root.im_proto.ConversationCoreInfo.encode(m.conversation_core_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(26).string(m.extra_info);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(32).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(42).string(m.check_message);
            return w;
        };

        SetConversationCoreInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationCoreInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_core_info = $root.im_proto.ConversationCoreInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.extra_info = r.string();
                    break;
                case 4:
                    m.check_code = r.int64();
                    break;
                case 5:
                    m.check_message = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationCoreInfoResponseBody;
    })();

    im_proto.UpsertConversationCoreExtInfoRequestBody = (function() {

        function UpsertConversationCoreExtInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpsertConversationCoreExtInfoRequestBody.prototype.conversation_id = "";
        UpsertConversationCoreExtInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpsertConversationCoreExtInfoRequestBody.prototype.conversation_type = 0;
        UpsertConversationCoreExtInfoRequestBody.prototype.ext = $util.emptyObject;

        UpsertConversationCoreExtInfoRequestBody.create = function create(properties) {
            return new UpsertConversationCoreExtInfoRequestBody(properties);
        };

        UpsertConversationCoreExtInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        UpsertConversationCoreExtInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpsertConversationCoreExtInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpsertConversationCoreExtInfoRequestBody;
    })();

    im_proto.UpsertConversationCoreExtInfoResponseBody = (function() {

        function UpsertConversationCoreExtInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpsertConversationCoreExtInfoResponseBody.prototype.core_info = null;
        UpsertConversationCoreExtInfoResponseBody.prototype.status = 0;
        UpsertConversationCoreExtInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpsertConversationCoreExtInfoResponseBody.prototype.check_message = "";
        UpsertConversationCoreExtInfoResponseBody.prototype.extra_info = "";

        UpsertConversationCoreExtInfoResponseBody.create = function create(properties) {
            return new UpsertConversationCoreExtInfoResponseBody(properties);
        };

        UpsertConversationCoreExtInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.core_info != null && m.hasOwnProperty("core_info"))
                $root.im_proto.ConversationCoreInfo.encode(m.core_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        UpsertConversationCoreExtInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpsertConversationCoreExtInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.core_info = $root.im_proto.ConversationCoreInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpsertConversationCoreExtInfoResponseBody;
    })();

    im_proto.DeleteConversationCoreExtInfoRequestBody = (function() {

        function DeleteConversationCoreExtInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteConversationCoreExtInfoRequestBody.prototype.conversation_id = "";
        DeleteConversationCoreExtInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteConversationCoreExtInfoRequestBody.prototype.ext = $util.emptyObject;

        DeleteConversationCoreExtInfoRequestBody.create = function create(properties) {
            return new DeleteConversationCoreExtInfoRequestBody(properties);
        };

        DeleteConversationCoreExtInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        DeleteConversationCoreExtInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteConversationCoreExtInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteConversationCoreExtInfoRequestBody;
    })();

    im_proto.DeleteConversationCoreExtInfoResponseBody = (function() {

        function DeleteConversationCoreExtInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteConversationCoreExtInfoResponseBody.prototype.core_info = null;
        DeleteConversationCoreExtInfoResponseBody.prototype.status = 0;
        DeleteConversationCoreExtInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteConversationCoreExtInfoResponseBody.prototype.check_message = "";
        DeleteConversationCoreExtInfoResponseBody.prototype.extra_info = "";

        DeleteConversationCoreExtInfoResponseBody.create = function create(properties) {
            return new DeleteConversationCoreExtInfoResponseBody(properties);
        };

        DeleteConversationCoreExtInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.core_info != null && m.hasOwnProperty("core_info"))
                $root.im_proto.ConversationCoreInfo.encode(m.core_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        DeleteConversationCoreExtInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteConversationCoreExtInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.core_info = $root.im_proto.ConversationCoreInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteConversationCoreExtInfoResponseBody;
    })();

    im_proto.SetConversationSettingInfoRequestBody = (function() {

        function SetConversationSettingInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationSettingInfoRequestBody.prototype.conversation_id = "";
        SetConversationSettingInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationSettingInfoRequestBody.prototype.conversation_type = 0;
        SetConversationSettingInfoRequestBody.prototype.set_stick_on_top = false;
        SetConversationSettingInfoRequestBody.prototype.set_mute = false;
        SetConversationSettingInfoRequestBody.prototype.set_favorite = false;

        SetConversationSettingInfoRequestBody.create = function create(properties) {
            return new SetConversationSettingInfoRequestBody(properties);
        };

        SetConversationSettingInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.set_stick_on_top != null && m.hasOwnProperty("set_stick_on_top"))
                w.uint32(32).bool(m.set_stick_on_top);
            if (m.set_mute != null && m.hasOwnProperty("set_mute"))
                w.uint32(40).bool(m.set_mute);
            if (m.set_favorite != null && m.hasOwnProperty("set_favorite"))
                w.uint32(48).bool(m.set_favorite);
            return w;
        };

        SetConversationSettingInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationSettingInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    m.set_stick_on_top = r.bool();
                    break;
                case 5:
                    m.set_mute = r.bool();
                    break;
                case 6:
                    m.set_favorite = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationSettingInfoRequestBody;
    })();

    im_proto.SetConversationSettingInfoResponseBody = (function() {

        function SetConversationSettingInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SetConversationSettingInfoResponseBody.prototype.setting_info = null;
        SetConversationSettingInfoResponseBody.prototype.status = 0;
        SetConversationSettingInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetConversationSettingInfoResponseBody.prototype.check_message = "";
        SetConversationSettingInfoResponseBody.prototype.extra_info = "";

        SetConversationSettingInfoResponseBody.create = function create(properties) {
            return new SetConversationSettingInfoResponseBody(properties);
        };

        SetConversationSettingInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.setting_info != null && m.hasOwnProperty("setting_info"))
                $root.im_proto.ConversationSettingInfo.encode(m.setting_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        SetConversationSettingInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.SetConversationSettingInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.setting_info = $root.im_proto.ConversationSettingInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SetConversationSettingInfoResponseBody;
    })();

    im_proto.UpsertConversationSettingExtInfoRequestBody = (function() {

        function UpsertConversationSettingExtInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpsertConversationSettingExtInfoRequestBody.prototype.conversation_id = "";
        UpsertConversationSettingExtInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpsertConversationSettingExtInfoRequestBody.prototype.conversation_type = 0;
        UpsertConversationSettingExtInfoRequestBody.prototype.ext = $util.emptyObject;

        UpsertConversationSettingExtInfoRequestBody.create = function create(properties) {
            return new UpsertConversationSettingExtInfoRequestBody(properties);
        };

        UpsertConversationSettingExtInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.conversation_type != null && m.hasOwnProperty("conversation_type"))
                w.uint32(24).int32(m.conversation_type);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        UpsertConversationSettingExtInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpsertConversationSettingExtInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    m.conversation_type = r.int32();
                    break;
                case 4:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpsertConversationSettingExtInfoRequestBody;
    })();

    im_proto.UpsertConversationSettingExtInfoResponseBody = (function() {

        function UpsertConversationSettingExtInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        UpsertConversationSettingExtInfoResponseBody.prototype.setting_info = null;
        UpsertConversationSettingExtInfoResponseBody.prototype.status = 0;
        UpsertConversationSettingExtInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UpsertConversationSettingExtInfoResponseBody.prototype.check_message = "";
        UpsertConversationSettingExtInfoResponseBody.prototype.extra_info = "";

        UpsertConversationSettingExtInfoResponseBody.create = function create(properties) {
            return new UpsertConversationSettingExtInfoResponseBody(properties);
        };

        UpsertConversationSettingExtInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.setting_info != null && m.hasOwnProperty("setting_info"))
                $root.im_proto.ConversationSettingInfo.encode(m.setting_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        UpsertConversationSettingExtInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.UpsertConversationSettingExtInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.setting_info = $root.im_proto.ConversationSettingInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UpsertConversationSettingExtInfoResponseBody;
    })();

    im_proto.DeleteConversationSettingExtInfoRequestBody = (function() {

        function DeleteConversationSettingExtInfoRequestBody(p) {
            this.ext = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteConversationSettingExtInfoRequestBody.prototype.conversation_id = "";
        DeleteConversationSettingExtInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteConversationSettingExtInfoRequestBody.prototype.ext = $util.emptyObject;

        DeleteConversationSettingExtInfoRequestBody.create = function create(properties) {
            return new DeleteConversationSettingExtInfoRequestBody(properties);
        };

        DeleteConversationSettingExtInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(10).string(m.conversation_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            if (m.ext != null && m.hasOwnProperty("ext")) {
                for (var ks = Object.keys(m.ext), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(10).string(ks[i]).uint32(18).string(m.ext[ks[i]]).ldelim();
                }
            }
            return w;
        };

        DeleteConversationSettingExtInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteConversationSettingExtInfoRequestBody(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_id = r.string();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                case 3:
                    r.skip().pos++;
                    if (m.ext === $util.emptyObject)
                        m.ext = {};
                    k = r.string();
                    r.pos++;
                    m.ext[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteConversationSettingExtInfoRequestBody;
    })();

    im_proto.DeleteConversationSettingExtInfoResponseBody = (function() {

        function DeleteConversationSettingExtInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteConversationSettingExtInfoResponseBody.prototype.setting_info = null;
        DeleteConversationSettingExtInfoResponseBody.prototype.status = 0;
        DeleteConversationSettingExtInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteConversationSettingExtInfoResponseBody.prototype.check_message = "";
        DeleteConversationSettingExtInfoResponseBody.prototype.extra_info = "";

        DeleteConversationSettingExtInfoResponseBody.create = function create(properties) {
            return new DeleteConversationSettingExtInfoResponseBody(properties);
        };

        DeleteConversationSettingExtInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.setting_info != null && m.hasOwnProperty("setting_info"))
                $root.im_proto.ConversationSettingInfo.encode(m.setting_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        DeleteConversationSettingExtInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteConversationSettingExtInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.setting_info = $root.im_proto.ConversationSettingInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteConversationSettingExtInfoResponseBody;
    })();

    im_proto.GetConversationSettingInfoRequestBody = (function() {

        function GetConversationSettingInfoRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationSettingInfoRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GetConversationSettingInfoRequestBody.create = function create(properties) {
            return new GetConversationSettingInfoRequestBody(properties);
        };

        GetConversationSettingInfoRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            return w;
        };

        GetConversationSettingInfoRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationSettingInfoRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationSettingInfoRequestBody;
    })();

    im_proto.GetConversationSettingInfoResponseBody = (function() {

        function GetConversationSettingInfoResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetConversationSettingInfoResponseBody.prototype.conversation_setting_info = null;
        GetConversationSettingInfoResponseBody.prototype.status = 0;
        GetConversationSettingInfoResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetConversationSettingInfoResponseBody.prototype.check_message = "";
        GetConversationSettingInfoResponseBody.prototype.extra_info = "";

        GetConversationSettingInfoResponseBody.create = function create(properties) {
            return new GetConversationSettingInfoResponseBody(properties);
        };

        GetConversationSettingInfoResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_setting_info != null && m.hasOwnProperty("conversation_setting_info"))
                $root.im_proto.ConversationSettingInfo.encode(m.conversation_setting_info, w.uint32(10).fork()).ldelim();
            if (m.status != null && m.hasOwnProperty("status"))
                w.uint32(16).int32(m.status);
            if (m.check_code != null && m.hasOwnProperty("check_code"))
                w.uint32(24).int64(m.check_code);
            if (m.check_message != null && m.hasOwnProperty("check_message"))
                w.uint32(34).string(m.check_message);
            if (m.extra_info != null && m.hasOwnProperty("extra_info"))
                w.uint32(42).string(m.extra_info);
            return w;
        };

        GetConversationSettingInfoResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetConversationSettingInfoResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_setting_info = $root.im_proto.ConversationSettingInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                case 3:
                    m.check_code = r.int64();
                    break;
                case 4:
                    m.check_message = r.string();
                    break;
                case 5:
                    m.extra_info = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetConversationSettingInfoResponseBody;
    })();

    im_proto.StrangerConversation = (function() {

        function StrangerConversation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        StrangerConversation.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        StrangerConversation.prototype.unread = 0;
        StrangerConversation.prototype.last_message = null;
        StrangerConversation.prototype.conversation_id = "";

        StrangerConversation.create = function create(properties) {
            return new StrangerConversation(properties);
        };

        StrangerConversation.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(8).int64(m.conversation_short_id);
            if (m.unread != null && m.hasOwnProperty("unread"))
                w.uint32(16).int32(m.unread);
            if (m.last_message != null && m.hasOwnProperty("last_message"))
                $root.im_proto.MessageBody.encode(m.last_message, w.uint32(26).fork()).ldelim();
            if (m.conversation_id != null && m.hasOwnProperty("conversation_id"))
                w.uint32(34).string(m.conversation_id);
            return w;
        };

        StrangerConversation.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.StrangerConversation();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_short_id = r.int64();
                    break;
                case 2:
                    m.unread = r.int32();
                    break;
                case 3:
                    m.last_message = $root.im_proto.MessageBody.decode(r, r.uint32());
                    break;
                case 4:
                    m.conversation_id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StrangerConversation;
    })();

    im_proto.StrangerNewMessageNotify = (function() {

        function StrangerNewMessageNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        StrangerNewMessageNotify.prototype.message = null;

        StrangerNewMessageNotify.create = function create(properties) {
            return new StrangerNewMessageNotify(properties);
        };

        StrangerNewMessageNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.message != null && m.hasOwnProperty("message"))
                $root.im_proto.MessageBody.encode(m.message, w.uint32(18).fork()).ldelim();
            return w;
        };

        StrangerNewMessageNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.StrangerNewMessageNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.message = $root.im_proto.MessageBody.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StrangerNewMessageNotify;
    })();

    im_proto.GetStrangerConversationListRequestBody = (function() {

        function GetStrangerConversationListRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetStrangerConversationListRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetStrangerConversationListRequestBody.prototype.count = $util.Long ? $util.Long.fromBits(50,0,false) : 50;
        GetStrangerConversationListRequestBody.prototype.show_total_unread = false;

        GetStrangerConversationListRequestBody.create = function create(properties) {
            return new GetStrangerConversationListRequestBody(properties);
        };

        GetStrangerConversationListRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cursor != null && m.hasOwnProperty("cursor"))
                w.uint32(8).int64(m.cursor);
            if (m.count != null && m.hasOwnProperty("count"))
                w.uint32(16).int64(m.count);
            if (m.show_total_unread != null && m.hasOwnProperty("show_total_unread"))
                w.uint32(24).bool(m.show_total_unread);
            return w;
        };

        GetStrangerConversationListRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetStrangerConversationListRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cursor = r.int64();
                    break;
                case 2:
                    m.count = r.int64();
                    break;
                case 3:
                    m.show_total_unread = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetStrangerConversationListRequestBody;
    })();

    im_proto.GetStrangerConversationListResponseBody = (function() {

        function GetStrangerConversationListResponseBody(p) {
            this.conversation_list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetStrangerConversationListResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetStrangerConversationListResponseBody.prototype.has_more = false;
        GetStrangerConversationListResponseBody.prototype.total_unread = 0;
        GetStrangerConversationListResponseBody.prototype.conversation_list = $util.emptyArray;

        GetStrangerConversationListResponseBody.create = function create(properties) {
            return new GetStrangerConversationListResponseBody(properties);
        };

        GetStrangerConversationListResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.next_cursor != null && m.hasOwnProperty("next_cursor"))
                w.uint32(8).int64(m.next_cursor);
            if (m.has_more != null && m.hasOwnProperty("has_more"))
                w.uint32(16).bool(m.has_more);
            if (m.total_unread != null && m.hasOwnProperty("total_unread"))
                w.uint32(24).int32(m.total_unread);
            if (m.conversation_list != null && m.conversation_list.length) {
                for (var i = 0; i < m.conversation_list.length; ++i)
                    $root.im_proto.StrangerConversation.encode(m.conversation_list[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        GetStrangerConversationListResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetStrangerConversationListResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.next_cursor = r.int64();
                    break;
                case 2:
                    m.has_more = r.bool();
                    break;
                case 3:
                    m.total_unread = r.int32();
                    break;
                case 4:
                    if (!(m.conversation_list && m.conversation_list.length))
                        m.conversation_list = [];
                    m.conversation_list.push($root.im_proto.StrangerConversation.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetStrangerConversationListResponseBody;
    })();

    im_proto.GetStrangerMessagesRequestBody = (function() {

        function GetStrangerMessagesRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetStrangerMessagesRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetStrangerMessagesRequestBody.prototype.reset_unread_count = false;

        GetStrangerMessagesRequestBody.create = function create(properties) {
            return new GetStrangerMessagesRequestBody(properties);
        };

        GetStrangerMessagesRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(8).int64(m.conversation_short_id);
            if (m.reset_unread_count != null && m.hasOwnProperty("reset_unread_count"))
                w.uint32(16).bool(m.reset_unread_count);
            return w;
        };

        GetStrangerMessagesRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetStrangerMessagesRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_short_id = r.int64();
                    break;
                case 2:
                    m.reset_unread_count = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetStrangerMessagesRequestBody;
    })();

    im_proto.GetStrangerMessagesResponseBody = (function() {

        function GetStrangerMessagesResponseBody(p) {
            this.messages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GetStrangerMessagesResponseBody.prototype.messages = $util.emptyArray;

        GetStrangerMessagesResponseBody.create = function create(properties) {
            return new GetStrangerMessagesResponseBody(properties);
        };

        GetStrangerMessagesResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.im_proto.MessageBody.encode(m.messages[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        GetStrangerMessagesResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.GetStrangerMessagesResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 3:
                    if (!(m.messages && m.messages.length))
                        m.messages = [];
                    m.messages.push($root.im_proto.MessageBody.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetStrangerMessagesResponseBody;
    })();

    im_proto.DeleteStrangerMessageRequestBody = (function() {

        function DeleteStrangerMessageRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerMessageRequestBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DeleteStrangerMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        DeleteStrangerMessageRequestBody.create = function create(properties) {
            return new DeleteStrangerMessageRequestBody(properties);
        };

        DeleteStrangerMessageRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.server_message_id != null && m.hasOwnProperty("server_message_id"))
                w.uint32(8).int64(m.server_message_id);
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(16).int64(m.conversation_short_id);
            return w;
        };

        DeleteStrangerMessageRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerMessageRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.server_message_id = r.int64();
                    break;
                case 2:
                    m.conversation_short_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerMessageRequestBody;
    })();

    im_proto.DeleteStrangerMessageResponseBody = (function() {

        function DeleteStrangerMessageResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerMessageResponseBody.create = function create(properties) {
            return new DeleteStrangerMessageResponseBody(properties);
        };

        DeleteStrangerMessageResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        DeleteStrangerMessageResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerMessageResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerMessageResponseBody;
    })();

    im_proto.DeleteStrangerConversationRequestBody = (function() {

        function DeleteStrangerConversationRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerConversationRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        DeleteStrangerConversationRequestBody.create = function create(properties) {
            return new DeleteStrangerConversationRequestBody(properties);
        };

        DeleteStrangerConversationRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(8).int64(m.conversation_short_id);
            return w;
        };

        DeleteStrangerConversationRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerConversationRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_short_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerConversationRequestBody;
    })();

    im_proto.DeleteStrangerConversationResponseBody = (function() {

        function DeleteStrangerConversationResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerConversationResponseBody.create = function create(properties) {
            return new DeleteStrangerConversationResponseBody(properties);
        };

        DeleteStrangerConversationResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        DeleteStrangerConversationResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerConversationResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerConversationResponseBody;
    })();

    im_proto.DeleteStrangerAllConversationRequestBody = (function() {

        function DeleteStrangerAllConversationRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerAllConversationRequestBody.create = function create(properties) {
            return new DeleteStrangerAllConversationRequestBody(properties);
        };

        DeleteStrangerAllConversationRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        DeleteStrangerAllConversationRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerAllConversationRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerAllConversationRequestBody;
    })();

    im_proto.DeleteStrangerAllConversationResponseBody = (function() {

        function DeleteStrangerAllConversationResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DeleteStrangerAllConversationResponseBody.create = function create(properties) {
            return new DeleteStrangerAllConversationResponseBody(properties);
        };

        DeleteStrangerAllConversationResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        DeleteStrangerAllConversationResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.DeleteStrangerAllConversationResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DeleteStrangerAllConversationResponseBody;
    })();

    im_proto.MarkStrangerConversationReadRequestBody = (function() {

        function MarkStrangerConversationReadRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkStrangerConversationReadRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        MarkStrangerConversationReadRequestBody.create = function create(properties) {
            return new MarkStrangerConversationReadRequestBody(properties);
        };

        MarkStrangerConversationReadRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.conversation_short_id != null && m.hasOwnProperty("conversation_short_id"))
                w.uint32(8).int64(m.conversation_short_id);
            return w;
        };

        MarkStrangerConversationReadRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkStrangerConversationReadRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.conversation_short_id = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkStrangerConversationReadRequestBody;
    })();

    im_proto.MarkStrangerConversationReadResponseBody = (function() {

        function MarkStrangerConversationReadResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkStrangerConversationReadResponseBody.create = function create(properties) {
            return new MarkStrangerConversationReadResponseBody(properties);
        };

        MarkStrangerConversationReadResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        MarkStrangerConversationReadResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkStrangerConversationReadResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkStrangerConversationReadResponseBody;
    })();

    im_proto.MarkStrangerAllConversationReadRequestBody = (function() {

        function MarkStrangerAllConversationReadRequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkStrangerAllConversationReadRequestBody.create = function create(properties) {
            return new MarkStrangerAllConversationReadRequestBody(properties);
        };

        MarkStrangerAllConversationReadRequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        MarkStrangerAllConversationReadRequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkStrangerAllConversationReadRequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkStrangerAllConversationReadRequestBody;
    })();

    im_proto.MarkStrangerAllConversationReadResponseBody = (function() {

        function MarkStrangerAllConversationReadResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MarkStrangerAllConversationReadResponseBody.create = function create(properties) {
            return new MarkStrangerAllConversationReadResponseBody(properties);
        };

        MarkStrangerAllConversationReadResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        MarkStrangerAllConversationReadResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.MarkStrangerAllConversationReadResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MarkStrangerAllConversationReadResponseBody;
    })();

    im_proto.RequestBody = (function() {

        function RequestBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RequestBody.prototype.send_message_body = null;
        RequestBody.prototype.messages_per_user_body = null;
        RequestBody.prototype.messages_per_user_init_body = null;
        RequestBody.prototype.messages_per_user_init_v2_body = null;
        RequestBody.prototype.conversations_list_body = null;
        RequestBody.prototype.messages_in_conversation_body = null;
        RequestBody.prototype.send_user_action_body = null;
        RequestBody.prototype.send_input_status_body = null;
        RequestBody.prototype.get_conversation_info_body = null;
        RequestBody.prototype.set_conversation_info_body = null;
        RequestBody.prototype.create_conversation_body = null;
        RequestBody.prototype.delete_conversation_body = null;
        RequestBody.prototype.mark_conversation_read_body = null;
        RequestBody.prototype.conversation_participants_body = null;
        RequestBody.prototype.get_conversation_info_list_body = null;
        RequestBody.prototype.report_conversation_cursor_body = null;
        RequestBody.prototype.get_conversation_info_v2_body = null;
        RequestBody.prototype.create_conversation_v2_body = null;
        RequestBody.prototype.get_conversation_info_list_v2_body = null;
        RequestBody.prototype.get_conversation_info_list_by_favorite_v2_body = null;
        RequestBody.prototype.get_conversation_info_list_by_top_v2_body = null;
        RequestBody.prototype.conversation_add_participants_body = null;
        RequestBody.prototype.conversation_remove_participants_body = null;
        RequestBody.prototype.leave_conversation_body = null;
        RequestBody.prototype.conversation_set_role_body = null;
        RequestBody.prototype.mget_conversation_participants_body = null;
        RequestBody.prototype.update_conversation_participant_body = null;
        RequestBody.prototype.delete_message_body = null;
        RequestBody.prototype.recall_message_body = null;
        RequestBody.prototype.get_group_info_body = null;
        RequestBody.prototype.set_group_info_body = null;
        RequestBody.prototype.get_group_info_list_body = null;
        RequestBody.prototype.get_conversation_core_info_body = null;
        RequestBody.prototype.set_conversation_core_info_body = null;
        RequestBody.prototype.get_conversation_core_info_list_body = null;
        RequestBody.prototype.upsert_conversation_core_ext_info_body = null;
        RequestBody.prototype.delete_conversation_core_ext_info_body = null;
        RequestBody.prototype.get_conversation_setting_info_body = null;
        RequestBody.prototype.set_conversation_setting_info_body = null;
        RequestBody.prototype.upsert_conversation_setting_ext_info_body = null;
        RequestBody.prototype.delete_conversation_setting_ext_info_body = null;
        RequestBody.prototype.get_stranger_conversation_body = null;
        RequestBody.prototype.get_stranger_messages_body = null;
        RequestBody.prototype.delete_stranger_message_body = null;
        RequestBody.prototype.delete_stranger_conversation_body = null;
        RequestBody.prototype.delete_stranger_all_conversation_body = null;
        RequestBody.prototype.mark_stranger_conversation_read_body = null;
        RequestBody.prototype.mark_stranger_all_conversation_read_body = null;

        RequestBody.create = function create(properties) {
            return new RequestBody(properties);
        };

        RequestBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.send_message_body != null && m.hasOwnProperty("send_message_body"))
                $root.im_proto.SendMessageRequestBody.encode(m.send_message_body, w.uint32(802).fork()).ldelim();
            if (m.messages_per_user_body != null && m.hasOwnProperty("messages_per_user_body"))
                $root.im_proto.MessagesPerUserRequestBody.encode(m.messages_per_user_body, w.uint32(1602).fork()).ldelim();
            if (m.messages_per_user_init_body != null && m.hasOwnProperty("messages_per_user_init_body"))
                $root.im_proto.MessagesPerUserInitRequestBody.encode(m.messages_per_user_init_body, w.uint32(1610).fork()).ldelim();
            if (m.messages_per_user_init_v2_body != null && m.hasOwnProperty("messages_per_user_init_v2_body"))
                $root.im_proto.MessagesPerUserInitV2RequestBody.encode(m.messages_per_user_init_v2_body, w.uint32(1626).fork()).ldelim();
            if (m.conversations_list_body != null && m.hasOwnProperty("conversations_list_body"))
                $root.im_proto.ConversationsListRequestBody.encode(m.conversations_list_body, w.uint32(2402).fork()).ldelim();
            if (m.messages_in_conversation_body != null && m.hasOwnProperty("messages_in_conversation_body"))
                $root.im_proto.MessagesInConversationRequestBody.encode(m.messages_in_conversation_body, w.uint32(2410).fork()).ldelim();
            if (m.send_user_action_body != null && m.hasOwnProperty("send_user_action_body"))
                $root.im_proto.SendUserActionRequestBody.encode(m.send_user_action_body, w.uint32(3282).fork()).ldelim();
            if (m.send_input_status_body != null && m.hasOwnProperty("send_input_status_body"))
                $root.im_proto.SendInputStatusRequestBody.encode(m.send_input_status_body, w.uint32(3290).fork()).ldelim();
            if (m.get_conversation_info_body != null && m.hasOwnProperty("get_conversation_info_body"))
                $root.im_proto.GetConversationInfoRequestBody.encode(m.get_conversation_info_body, w.uint32(4802).fork()).ldelim();
            if (m.set_conversation_info_body != null && m.hasOwnProperty("set_conversation_info_body"))
                $root.im_proto.SetConversationInfoRequestBody.encode(m.set_conversation_info_body, w.uint32(4810).fork()).ldelim();
            if (m.create_conversation_body != null && m.hasOwnProperty("create_conversation_body"))
                $root.im_proto.CreateConversationRequestBody.encode(m.create_conversation_body, w.uint32(4818).fork()).ldelim();
            if (m.delete_conversation_body != null && m.hasOwnProperty("delete_conversation_body"))
                $root.im_proto.DeleteConversationRequestBody.encode(m.delete_conversation_body, w.uint32(4826).fork()).ldelim();
            if (m.mark_conversation_read_body != null && m.hasOwnProperty("mark_conversation_read_body"))
                $root.im_proto.MarkConversationReadRequestBody.encode(m.mark_conversation_read_body, w.uint32(4834).fork()).ldelim();
            if (m.conversation_participants_body != null && m.hasOwnProperty("conversation_participants_body"))
                $root.im_proto.ConversationParticipantsListRequestBody.encode(m.conversation_participants_body, w.uint32(4842).fork()).ldelim();
            if (m.report_conversation_cursor_body != null && m.hasOwnProperty("report_conversation_cursor_body"))
                $root.im_proto.ReportGetMessagesCursorRequestBody.encode(m.report_conversation_cursor_body, w.uint32(4850).fork()).ldelim();
            if (m.get_conversation_info_list_body != null && m.hasOwnProperty("get_conversation_info_list_body"))
                $root.im_proto.GetConversationInfoListRequestBody.encode(m.get_conversation_info_list_body, w.uint32(4858).fork()).ldelim();
            if (m.get_conversation_info_v2_body != null && m.hasOwnProperty("get_conversation_info_v2_body"))
                $root.im_proto.GetConversationInfoV2RequestBody.encode(m.get_conversation_info_v2_body, w.uint32(4866).fork()).ldelim();
            if (m.create_conversation_v2_body != null && m.hasOwnProperty("create_conversation_v2_body"))
                $root.im_proto.CreateConversationV2RequestBody.encode(m.create_conversation_v2_body, w.uint32(4874).fork()).ldelim();
            if (m.get_conversation_info_list_v2_body != null && m.hasOwnProperty("get_conversation_info_list_v2_body"))
                $root.im_proto.GetConversationInfoListV2RequestBody.encode(m.get_conversation_info_list_v2_body, w.uint32(4882).fork()).ldelim();
            if (m.get_conversation_info_list_by_favorite_v2_body != null && m.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body"))
                $root.im_proto.ConversationsPerUserByFavoriteV2RequestBody.encode(m.get_conversation_info_list_by_favorite_v2_body, w.uint32(4890).fork()).ldelim();
            if (m.get_conversation_info_list_by_top_v2_body != null && m.hasOwnProperty("get_conversation_info_list_by_top_v2_body"))
                $root.im_proto.ConversationsPerUserByTopV2RequestBody.encode(m.get_conversation_info_list_by_top_v2_body, w.uint32(4898).fork()).ldelim();
            if (m.conversation_add_participants_body != null && m.hasOwnProperty("conversation_add_participants_body"))
                $root.im_proto.ConversationAddParticipantsRequestBody.encode(m.conversation_add_participants_body, w.uint32(5202).fork()).ldelim();
            if (m.conversation_remove_participants_body != null && m.hasOwnProperty("conversation_remove_participants_body"))
                $root.im_proto.ConversationRemoveParticipantsRequestBody.encode(m.conversation_remove_participants_body, w.uint32(5210).fork()).ldelim();
            if (m.leave_conversation_body != null && m.hasOwnProperty("leave_conversation_body"))
                $root.im_proto.ConversationLeaveRequestBody.encode(m.leave_conversation_body, w.uint32(5218).fork()).ldelim();
            if (m.conversation_set_role_body != null && m.hasOwnProperty("conversation_set_role_body"))
                $root.im_proto.ConversationSetRoleRequestBody.encode(m.conversation_set_role_body, w.uint32(5226).fork()).ldelim();
            if (m.mget_conversation_participants_body != null && m.hasOwnProperty("mget_conversation_participants_body"))
                $root.im_proto.MgetConversationParticipantsRequestBody.encode(m.mget_conversation_participants_body, w.uint32(5234).fork()).ldelim();
            if (m.update_conversation_participant_body != null && m.hasOwnProperty("update_conversation_participant_body"))
                $root.im_proto.UpdateConversationParticipantRequestBody.encode(m.update_conversation_participant_body, w.uint32(5242).fork()).ldelim();
            if (m.delete_message_body != null && m.hasOwnProperty("delete_message_body"))
                $root.im_proto.DeleteMessageRequestBody.encode(m.delete_message_body, w.uint32(5610).fork()).ldelim();
            if (m.recall_message_body != null && m.hasOwnProperty("recall_message_body"))
                $root.im_proto.RecallMessageRequestBody.encode(m.recall_message_body, w.uint32(5618).fork()).ldelim();
            if (m.get_group_info_body != null && m.hasOwnProperty("get_group_info_body"))
                $root.im_proto.GetGroupInfoRequestBody.encode(m.get_group_info_body, w.uint32(6410).fork()).ldelim();
            if (m.set_group_info_body != null && m.hasOwnProperty("set_group_info_body"))
                $root.im_proto.SetGroupInfoRequestBody.encode(m.set_group_info_body, w.uint32(6418).fork()).ldelim();
            if (m.get_group_info_list_body != null && m.hasOwnProperty("get_group_info_list_body"))
                $root.im_proto.GetGroupInfoListRequestBody.encode(m.get_group_info_list_body, w.uint32(6426).fork()).ldelim();
            if (m.get_conversation_core_info_body != null && m.hasOwnProperty("get_conversation_core_info_body"))
                $root.im_proto.GetConversationCoreInfoRequestBody.encode(m.get_conversation_core_info_body, w.uint32(7210).fork()).ldelim();
            if (m.set_conversation_core_info_body != null && m.hasOwnProperty("set_conversation_core_info_body"))
                $root.im_proto.SetConversationCoreInfoRequestBody.encode(m.set_conversation_core_info_body, w.uint32(7218).fork()).ldelim();
            if (m.get_conversation_core_info_list_body != null && m.hasOwnProperty("get_conversation_core_info_list_body"))
                $root.im_proto.GetConversationCoreInfoListRequestBody.encode(m.get_conversation_core_info_list_body, w.uint32(7226).fork()).ldelim();
            if (m.upsert_conversation_core_ext_info_body != null && m.hasOwnProperty("upsert_conversation_core_ext_info_body"))
                $root.im_proto.UpsertConversationCoreExtInfoRequestBody.encode(m.upsert_conversation_core_ext_info_body, w.uint32(7234).fork()).ldelim();
            if (m.delete_conversation_core_ext_info_body != null && m.hasOwnProperty("delete_conversation_core_ext_info_body"))
                $root.im_proto.DeleteConversationCoreExtInfoRequestBody.encode(m.delete_conversation_core_ext_info_body, w.uint32(7242).fork()).ldelim();
            if (m.get_conversation_setting_info_body != null && m.hasOwnProperty("get_conversation_setting_info_body"))
                $root.im_proto.GetConversationSettingInfoRequestBody.encode(m.get_conversation_setting_info_body, w.uint32(7362).fork()).ldelim();
            if (m.set_conversation_setting_info_body != null && m.hasOwnProperty("set_conversation_setting_info_body"))
                $root.im_proto.SetConversationSettingInfoRequestBody.encode(m.set_conversation_setting_info_body, w.uint32(7370).fork()).ldelim();
            if (m.upsert_conversation_setting_ext_info_body != null && m.hasOwnProperty("upsert_conversation_setting_ext_info_body"))
                $root.im_proto.UpsertConversationSettingExtInfoRequestBody.encode(m.upsert_conversation_setting_ext_info_body, w.uint32(7378).fork()).ldelim();
            if (m.delete_conversation_setting_ext_info_body != null && m.hasOwnProperty("delete_conversation_setting_ext_info_body"))
                $root.im_proto.DeleteConversationSettingExtInfoRequestBody.encode(m.delete_conversation_setting_ext_info_body, w.uint32(7386).fork()).ldelim();
            if (m.get_stranger_conversation_body != null && m.hasOwnProperty("get_stranger_conversation_body"))
                $root.im_proto.GetStrangerConversationListRequestBody.encode(m.get_stranger_conversation_body, w.uint32(8002).fork()).ldelim();
            if (m.get_stranger_messages_body != null && m.hasOwnProperty("get_stranger_messages_body"))
                $root.im_proto.GetStrangerMessagesRequestBody.encode(m.get_stranger_messages_body, w.uint32(8010).fork()).ldelim();
            if (m.delete_stranger_message_body != null && m.hasOwnProperty("delete_stranger_message_body"))
                $root.im_proto.DeleteStrangerMessageRequestBody.encode(m.delete_stranger_message_body, w.uint32(8018).fork()).ldelim();
            if (m.delete_stranger_conversation_body != null && m.hasOwnProperty("delete_stranger_conversation_body"))
                $root.im_proto.DeleteStrangerConversationRequestBody.encode(m.delete_stranger_conversation_body, w.uint32(8026).fork()).ldelim();
            if (m.delete_stranger_all_conversation_body != null && m.hasOwnProperty("delete_stranger_all_conversation_body"))
                $root.im_proto.DeleteStrangerAllConversationRequestBody.encode(m.delete_stranger_all_conversation_body, w.uint32(8034).fork()).ldelim();
            if (m.mark_stranger_conversation_read_body != null && m.hasOwnProperty("mark_stranger_conversation_read_body"))
                $root.im_proto.MarkStrangerConversationReadRequestBody.encode(m.mark_stranger_conversation_read_body, w.uint32(8042).fork()).ldelim();
            if (m.mark_stranger_all_conversation_read_body != null && m.hasOwnProperty("mark_stranger_all_conversation_read_body"))
                $root.im_proto.MarkStrangerAllConversationReadRequestBody.encode(m.mark_stranger_all_conversation_read_body, w.uint32(8050).fork()).ldelim();
            return w;
        };

        RequestBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.RequestBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 100:
                    m.send_message_body = $root.im_proto.SendMessageRequestBody.decode(r, r.uint32());
                    break;
                case 200:
                    m.messages_per_user_body = $root.im_proto.MessagesPerUserRequestBody.decode(r, r.uint32());
                    break;
                case 201:
                    m.messages_per_user_init_body = $root.im_proto.MessagesPerUserInitRequestBody.decode(r, r.uint32());
                    break;
                case 203:
                    m.messages_per_user_init_v2_body = $root.im_proto.MessagesPerUserInitV2RequestBody.decode(r, r.uint32());
                    break;
                case 300:
                    m.conversations_list_body = $root.im_proto.ConversationsListRequestBody.decode(r, r.uint32());
                    break;
                case 301:
                    m.messages_in_conversation_body = $root.im_proto.MessagesInConversationRequestBody.decode(r, r.uint32());
                    break;
                case 410:
                    m.send_user_action_body = $root.im_proto.SendUserActionRequestBody.decode(r, r.uint32());
                    break;
                case 411:
                    m.send_input_status_body = $root.im_proto.SendInputStatusRequestBody.decode(r, r.uint32());
                    break;
                case 600:
                    m.get_conversation_info_body = $root.im_proto.GetConversationInfoRequestBody.decode(r, r.uint32());
                    break;
                case 601:
                    m.set_conversation_info_body = $root.im_proto.SetConversationInfoRequestBody.decode(r, r.uint32());
                    break;
                case 602:
                    m.create_conversation_body = $root.im_proto.CreateConversationRequestBody.decode(r, r.uint32());
                    break;
                case 603:
                    m.delete_conversation_body = $root.im_proto.DeleteConversationRequestBody.decode(r, r.uint32());
                    break;
                case 604:
                    m.mark_conversation_read_body = $root.im_proto.MarkConversationReadRequestBody.decode(r, r.uint32());
                    break;
                case 605:
                    m.conversation_participants_body = $root.im_proto.ConversationParticipantsListRequestBody.decode(r, r.uint32());
                    break;
                case 607:
                    m.get_conversation_info_list_body = $root.im_proto.GetConversationInfoListRequestBody.decode(r, r.uint32());
                    break;
                case 606:
                    m.report_conversation_cursor_body = $root.im_proto.ReportGetMessagesCursorRequestBody.decode(r, r.uint32());
                    break;
                case 608:
                    m.get_conversation_info_v2_body = $root.im_proto.GetConversationInfoV2RequestBody.decode(r, r.uint32());
                    break;
                case 609:
                    m.create_conversation_v2_body = $root.im_proto.CreateConversationV2RequestBody.decode(r, r.uint32());
                    break;
                case 610:
                    m.get_conversation_info_list_v2_body = $root.im_proto.GetConversationInfoListV2RequestBody.decode(r, r.uint32());
                    break;
                case 611:
                    m.get_conversation_info_list_by_favorite_v2_body = $root.im_proto.ConversationsPerUserByFavoriteV2RequestBody.decode(r, r.uint32());
                    break;
                case 612:
                    m.get_conversation_info_list_by_top_v2_body = $root.im_proto.ConversationsPerUserByTopV2RequestBody.decode(r, r.uint32());
                    break;
                case 650:
                    m.conversation_add_participants_body = $root.im_proto.ConversationAddParticipantsRequestBody.decode(r, r.uint32());
                    break;
                case 651:
                    m.conversation_remove_participants_body = $root.im_proto.ConversationRemoveParticipantsRequestBody.decode(r, r.uint32());
                    break;
                case 652:
                    m.leave_conversation_body = $root.im_proto.ConversationLeaveRequestBody.decode(r, r.uint32());
                    break;
                case 653:
                    m.conversation_set_role_body = $root.im_proto.ConversationSetRoleRequestBody.decode(r, r.uint32());
                    break;
                case 654:
                    m.mget_conversation_participants_body = $root.im_proto.MgetConversationParticipantsRequestBody.decode(r, r.uint32());
                    break;
                case 655:
                    m.update_conversation_participant_body = $root.im_proto.UpdateConversationParticipantRequestBody.decode(r, r.uint32());
                    break;
                case 701:
                    m.delete_message_body = $root.im_proto.DeleteMessageRequestBody.decode(r, r.uint32());
                    break;
                case 702:
                    m.recall_message_body = $root.im_proto.RecallMessageRequestBody.decode(r, r.uint32());
                    break;
                case 801:
                    m.get_group_info_body = $root.im_proto.GetGroupInfoRequestBody.decode(r, r.uint32());
                    break;
                case 802:
                    m.set_group_info_body = $root.im_proto.SetGroupInfoRequestBody.decode(r, r.uint32());
                    break;
                case 803:
                    m.get_group_info_list_body = $root.im_proto.GetGroupInfoListRequestBody.decode(r, r.uint32());
                    break;
                case 901:
                    m.get_conversation_core_info_body = $root.im_proto.GetConversationCoreInfoRequestBody.decode(r, r.uint32());
                    break;
                case 902:
                    m.set_conversation_core_info_body = $root.im_proto.SetConversationCoreInfoRequestBody.decode(r, r.uint32());
                    break;
                case 903:
                    m.get_conversation_core_info_list_body = $root.im_proto.GetConversationCoreInfoListRequestBody.decode(r, r.uint32());
                    break;
                case 904:
                    m.upsert_conversation_core_ext_info_body = $root.im_proto.UpsertConversationCoreExtInfoRequestBody.decode(r, r.uint32());
                    break;
                case 905:
                    m.delete_conversation_core_ext_info_body = $root.im_proto.DeleteConversationCoreExtInfoRequestBody.decode(r, r.uint32());
                    break;
                case 920:
                    m.get_conversation_setting_info_body = $root.im_proto.GetConversationSettingInfoRequestBody.decode(r, r.uint32());
                    break;
                case 921:
                    m.set_conversation_setting_info_body = $root.im_proto.SetConversationSettingInfoRequestBody.decode(r, r.uint32());
                    break;
                case 922:
                    m.upsert_conversation_setting_ext_info_body = $root.im_proto.UpsertConversationSettingExtInfoRequestBody.decode(r, r.uint32());
                    break;
                case 923:
                    m.delete_conversation_setting_ext_info_body = $root.im_proto.DeleteConversationSettingExtInfoRequestBody.decode(r, r.uint32());
                    break;
                case 1000:
                    m.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListRequestBody.decode(r, r.uint32());
                    break;
                case 1001:
                    m.get_stranger_messages_body = $root.im_proto.GetStrangerMessagesRequestBody.decode(r, r.uint32());
                    break;
                case 1002:
                    m.delete_stranger_message_body = $root.im_proto.DeleteStrangerMessageRequestBody.decode(r, r.uint32());
                    break;
                case 1003:
                    m.delete_stranger_conversation_body = $root.im_proto.DeleteStrangerConversationRequestBody.decode(r, r.uint32());
                    break;
                case 1004:
                    m.delete_stranger_all_conversation_body = $root.im_proto.DeleteStrangerAllConversationRequestBody.decode(r, r.uint32());
                    break;
                case 1005:
                    m.mark_stranger_conversation_read_body = $root.im_proto.MarkStrangerConversationReadRequestBody.decode(r, r.uint32());
                    break;
                case 1006:
                    m.mark_stranger_all_conversation_read_body = $root.im_proto.MarkStrangerAllConversationReadRequestBody.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RequestBody;
    })();

    im_proto.Request = (function() {

        function Request(p) {
            this.headers = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Request.prototype.cmd = 0;
        Request.prototype.sequence_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Request.prototype.sdk_version = "";
        Request.prototype.token = "";
        Request.prototype.refer = 0;
        Request.prototype.inbox_type = 0;
        Request.prototype.build_number = "";
        Request.prototype.body = null;
        Request.prototype.device_id = "";
        Request.prototype.channel = "";
        Request.prototype.device_platform = "";
        Request.prototype.device_type = "";
        Request.prototype.os_version = "";
        Request.prototype.version_code = "";
        Request.prototype.headers = $util.emptyObject;
        Request.prototype.config_id = 0;
        Request.prototype.token_info = null;

        Request.create = function create(properties) {
            return new Request(properties);
        };

        Request.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && m.hasOwnProperty("cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.sequence_id != null && m.hasOwnProperty("sequence_id"))
                w.uint32(16).int64(m.sequence_id);
            if (m.sdk_version != null && m.hasOwnProperty("sdk_version"))
                w.uint32(26).string(m.sdk_version);
            if (m.token != null && m.hasOwnProperty("token"))
                w.uint32(34).string(m.token);
            if (m.refer != null && m.hasOwnProperty("refer"))
                w.uint32(40).int32(m.refer);
            if (m.inbox_type != null && m.hasOwnProperty("inbox_type"))
                w.uint32(48).int32(m.inbox_type);
            if (m.build_number != null && m.hasOwnProperty("build_number"))
                w.uint32(58).string(m.build_number);
            if (m.body != null && m.hasOwnProperty("body"))
                $root.im_proto.RequestBody.encode(m.body, w.uint32(66).fork()).ldelim();
            if (m.device_id != null && m.hasOwnProperty("device_id"))
                w.uint32(74).string(m.device_id);
            if (m.channel != null && m.hasOwnProperty("channel"))
                w.uint32(82).string(m.channel);
            if (m.device_platform != null && m.hasOwnProperty("device_platform"))
                w.uint32(90).string(m.device_platform);
            if (m.device_type != null && m.hasOwnProperty("device_type"))
                w.uint32(98).string(m.device_type);
            if (m.os_version != null && m.hasOwnProperty("os_version"))
                w.uint32(106).string(m.os_version);
            if (m.version_code != null && m.hasOwnProperty("version_code"))
                w.uint32(114).string(m.version_code);
            if (m.headers != null && m.hasOwnProperty("headers")) {
                for (var ks = Object.keys(m.headers), i = 0; i < ks.length; ++i) {
                    w.uint32(122).fork().uint32(10).string(ks[i]).uint32(18).string(m.headers[ks[i]]).ldelim();
                }
            }
            if (m.config_id != null && m.hasOwnProperty("config_id"))
                w.uint32(128).int32(m.config_id);
            if (m.token_info != null && m.hasOwnProperty("token_info"))
                $root.im_proto.TokenInfo.encode(m.token_info, w.uint32(138).fork()).ldelim();
            return w;
        };

        Request.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.Request(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.sequence_id = r.int64();
                    break;
                case 3:
                    m.sdk_version = r.string();
                    break;
                case 4:
                    m.token = r.string();
                    break;
                case 5:
                    m.refer = r.int32();
                    break;
                case 6:
                    m.inbox_type = r.int32();
                    break;
                case 7:
                    m.build_number = r.string();
                    break;
                case 8:
                    m.body = $root.im_proto.RequestBody.decode(r, r.uint32());
                    break;
                case 9:
                    m.device_id = r.string();
                    break;
                case 10:
                    m.channel = r.string();
                    break;
                case 11:
                    m.device_platform = r.string();
                    break;
                case 12:
                    m.device_type = r.string();
                    break;
                case 13:
                    m.os_version = r.string();
                    break;
                case 14:
                    m.version_code = r.string();
                    break;
                case 15:
                    r.skip().pos++;
                    if (m.headers === $util.emptyObject)
                        m.headers = {};
                    k = r.string();
                    r.pos++;
                    m.headers[k] = r.string();
                    break;
                case 16:
                    m.config_id = r.int32();
                    break;
                case 17:
                    m.token_info = $root.im_proto.TokenInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Request;
    })();

    im_proto.TokenType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT_TOKEN"] = 0;
        values[valuesById[1] = "APP_TOKEN"] = 1;
        values[valuesById[2] = "SERVER_TOKEN"] = 2;
        return values;
    })();

    im_proto.TokenInfo = (function() {

        function TokenInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TokenInfo.prototype.mark_id = 0;
        TokenInfo.prototype.type = 0;
        TokenInfo.prototype.app_id = 0;
        TokenInfo.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TokenInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        TokenInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mark_id != null && m.hasOwnProperty("mark_id"))
                w.uint32(8).int32(m.mark_id);
            if (m.type != null && m.hasOwnProperty("type"))
                w.uint32(16).int32(m.type);
            if (m.app_id != null && m.hasOwnProperty("app_id"))
                w.uint32(24).int32(m.app_id);
            if (m.user_id != null && m.hasOwnProperty("user_id"))
                w.uint32(32).int64(m.user_id);
            if (m.timestamp != null && m.hasOwnProperty("timestamp"))
                w.uint32(40).int64(m.timestamp);
            return w;
        };

        TokenInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.TokenInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mark_id = r.int32();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.app_id = r.int32();
                    break;
                case 4:
                    m.user_id = r.int64();
                    break;
                case 5:
                    m.timestamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TokenInfo;
    })();

    im_proto.ResponseBody = (function() {

        function ResponseBody(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ResponseBody.prototype.send_message_body = null;
        ResponseBody.prototype.messages_per_user_body = null;
        ResponseBody.prototype.messages_per_user_init_body = null;
        ResponseBody.prototype.messages_per_user_init_v2_body = null;
        ResponseBody.prototype.conversations_list_body = null;
        ResponseBody.prototype.messages_in_conversation_body = null;
        ResponseBody.prototype.send_user_action_body = null;
        ResponseBody.prototype.has_new_message_notify = null;
        ResponseBody.prototype.mark_conversation_read_notify = null;
        ResponseBody.prototype.conversation_info_updated_notify = null;
        ResponseBody.prototype.stranger_has_new_message_notify = null;
        ResponseBody.prototype.get_conversation_info_body = null;
        ResponseBody.prototype.set_conversation_info_body = null;
        ResponseBody.prototype.create_conversation_body = null;
        ResponseBody.prototype.get_conversations_info_list_body = null;
        ResponseBody.prototype.get_conversation_info_v2_body = null;
        ResponseBody.prototype.create_conversation_v2_body = null;
        ResponseBody.prototype.get_conversation_info_list_v2_body = null;
        ResponseBody.prototype.get_conversation_info_list_by_favorite_v2_body = null;
        ResponseBody.prototype.get_conversation_info_list_by_top_v2_body = null;
        ResponseBody.prototype.conversation_participants_body = null;
        ResponseBody.prototype.conversation_add_participants_body = null;
        ResponseBody.prototype.conversation_remove_participants_body = null;
        ResponseBody.prototype.conversation_set_role_body = null;
        ResponseBody.prototype.mget_conversation_participants_body = null;
        ResponseBody.prototype.update_conversation_participant_body = null;
        ResponseBody.prototype.get_group_info_body = null;
        ResponseBody.prototype.set_group_info_body = null;
        ResponseBody.prototype.get_groups_info_body = null;
        ResponseBody.prototype.get_conversation_core_info_body = null;
        ResponseBody.prototype.set_conversation_core_info_body = null;
        ResponseBody.prototype.get_conversation_core_info_list_body = null;
        ResponseBody.prototype.upsert_conversation_core_ext_info_body = null;
        ResponseBody.prototype.delete_conversation_core_ext_info_body = null;
        ResponseBody.prototype.get_conversation_setting_info_body = null;
        ResponseBody.prototype.set_conversation_setting_info_body = null;
        ResponseBody.prototype.upsert_conversation_setting_ext_info_body = null;
        ResponseBody.prototype.delete_conversation_setting_ext_info_body = null;
        ResponseBody.prototype.get_stranger_conversation_body = null;
        ResponseBody.prototype.get_stranger_messages_body = null;
        ResponseBody.prototype.delete_stranger_message_body = null;
        ResponseBody.prototype.delete_stranger_conversation_body = null;
        ResponseBody.prototype.delete_stranger_all_conversation_body = null;
        ResponseBody.prototype.mark_stranger_conversation_read_body = null;
        ResponseBody.prototype.mark_stranger_all_conversation_read_body = null;

        ResponseBody.create = function create(properties) {
            return new ResponseBody(properties);
        };

        ResponseBody.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.send_message_body != null && m.hasOwnProperty("send_message_body"))
                $root.im_proto.SendMessageResponseBody.encode(m.send_message_body, w.uint32(802).fork()).ldelim();
            if (m.messages_per_user_body != null && m.hasOwnProperty("messages_per_user_body"))
                $root.im_proto.MessagesPerUserResponseBody.encode(m.messages_per_user_body, w.uint32(1602).fork()).ldelim();
            if (m.messages_per_user_init_body != null && m.hasOwnProperty("messages_per_user_init_body"))
                $root.im_proto.MessagesPerUserInitResponseBody.encode(m.messages_per_user_init_body, w.uint32(1610).fork()).ldelim();
            if (m.messages_per_user_init_v2_body != null && m.hasOwnProperty("messages_per_user_init_v2_body"))
                $root.im_proto.MessagesPerUserInitV2ResponseBody.encode(m.messages_per_user_init_v2_body, w.uint32(1626).fork()).ldelim();
            if (m.conversations_list_body != null && m.hasOwnProperty("conversations_list_body"))
                $root.im_proto.ConversationsListResponseBody.encode(m.conversations_list_body, w.uint32(2402).fork()).ldelim();
            if (m.messages_in_conversation_body != null && m.hasOwnProperty("messages_in_conversation_body"))
                $root.im_proto.MessagesInConversationResponseBody.encode(m.messages_in_conversation_body, w.uint32(2410).fork()).ldelim();
            if (m.send_user_action_body != null && m.hasOwnProperty("send_user_action_body"))
                $root.im_proto.SendUserActionResponseBody.encode(m.send_user_action_body, w.uint32(3282).fork()).ldelim();
            if (m.has_new_message_notify != null && m.hasOwnProperty("has_new_message_notify"))
                $root.im_proto.NewMessageNotify.encode(m.has_new_message_notify, w.uint32(4002).fork()).ldelim();
            if (m.mark_conversation_read_notify != null && m.hasOwnProperty("mark_conversation_read_notify"))
                $root.im_proto.MarkConversationReadNotify.encode(m.mark_conversation_read_notify, w.uint32(4010).fork()).ldelim();
            if (m.conversation_info_updated_notify != null && m.hasOwnProperty("conversation_info_updated_notify"))
                $root.im_proto.ConversationInfoUpdatedNotify.encode(m.conversation_info_updated_notify, w.uint32(4018).fork()).ldelim();
            if (m.stranger_has_new_message_notify != null && m.hasOwnProperty("stranger_has_new_message_notify"))
                $root.im_proto.StrangerNewMessageNotify.encode(m.stranger_has_new_message_notify, w.uint32(4026).fork()).ldelim();
            if (m.get_conversation_info_body != null && m.hasOwnProperty("get_conversation_info_body"))
                $root.im_proto.GetConversationInfoResponseBody.encode(m.get_conversation_info_body, w.uint32(4802).fork()).ldelim();
            if (m.set_conversation_info_body != null && m.hasOwnProperty("set_conversation_info_body"))
                $root.im_proto.SetConversationInfoResponseBody.encode(m.set_conversation_info_body, w.uint32(4810).fork()).ldelim();
            if (m.create_conversation_body != null && m.hasOwnProperty("create_conversation_body"))
                $root.im_proto.CreateConversationResponseBody.encode(m.create_conversation_body, w.uint32(4818).fork()).ldelim();
            if (m.conversation_participants_body != null && m.hasOwnProperty("conversation_participants_body"))
                $root.im_proto.ConversationParticipantsListResponseBody.encode(m.conversation_participants_body, w.uint32(4842).fork()).ldelim();
            if (m.get_conversations_info_list_body != null && m.hasOwnProperty("get_conversations_info_list_body"))
                $root.im_proto.GetConversationInfoListResponseBody.encode(m.get_conversations_info_list_body, w.uint32(4858).fork()).ldelim();
            if (m.get_conversation_info_v2_body != null && m.hasOwnProperty("get_conversation_info_v2_body"))
                $root.im_proto.GetConversationInfoV2ResponseBody.encode(m.get_conversation_info_v2_body, w.uint32(4866).fork()).ldelim();
            if (m.create_conversation_v2_body != null && m.hasOwnProperty("create_conversation_v2_body"))
                $root.im_proto.CreateConversationV2ResponseBody.encode(m.create_conversation_v2_body, w.uint32(4874).fork()).ldelim();
            if (m.get_conversation_info_list_v2_body != null && m.hasOwnProperty("get_conversation_info_list_v2_body"))
                $root.im_proto.GetConversationInfoListV2ResponseBody.encode(m.get_conversation_info_list_v2_body, w.uint32(4882).fork()).ldelim();
            if (m.get_conversation_info_list_by_favorite_v2_body != null && m.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body"))
                $root.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.encode(m.get_conversation_info_list_by_favorite_v2_body, w.uint32(4890).fork()).ldelim();
            if (m.get_conversation_info_list_by_top_v2_body != null && m.hasOwnProperty("get_conversation_info_list_by_top_v2_body"))
                $root.im_proto.GetConversationInfoListByTopV2ResponseBody.encode(m.get_conversation_info_list_by_top_v2_body, w.uint32(4898).fork()).ldelim();
            if (m.conversation_add_participants_body != null && m.hasOwnProperty("conversation_add_participants_body"))
                $root.im_proto.ConversationAddParticipantsResponseBody.encode(m.conversation_add_participants_body, w.uint32(5202).fork()).ldelim();
            if (m.conversation_remove_participants_body != null && m.hasOwnProperty("conversation_remove_participants_body"))
                $root.im_proto.ConversationRemoveParticipantsResponseBody.encode(m.conversation_remove_participants_body, w.uint32(5210).fork()).ldelim();
            if (m.conversation_set_role_body != null && m.hasOwnProperty("conversation_set_role_body"))
                $root.im_proto.ConversationSetRoleResponseBody.encode(m.conversation_set_role_body, w.uint32(5226).fork()).ldelim();
            if (m.mget_conversation_participants_body != null && m.hasOwnProperty("mget_conversation_participants_body"))
                $root.im_proto.MgetConversationParticipantsResponseBody.encode(m.mget_conversation_participants_body, w.uint32(5234).fork()).ldelim();
            if (m.update_conversation_participant_body != null && m.hasOwnProperty("update_conversation_participant_body"))
                $root.im_proto.UpdateConversationParticipantResponseBody.encode(m.update_conversation_participant_body, w.uint32(5242).fork()).ldelim();
            if (m.get_group_info_body != null && m.hasOwnProperty("get_group_info_body"))
                $root.im_proto.GetGroupInfoResponseBody.encode(m.get_group_info_body, w.uint32(6410).fork()).ldelim();
            if (m.set_group_info_body != null && m.hasOwnProperty("set_group_info_body"))
                $root.im_proto.SetGroupInfoResponseBody.encode(m.set_group_info_body, w.uint32(6418).fork()).ldelim();
            if (m.get_groups_info_body != null && m.hasOwnProperty("get_groups_info_body"))
                $root.im_proto.GetGroupInfoListResponseBody.encode(m.get_groups_info_body, w.uint32(6426).fork()).ldelim();
            if (m.get_conversation_core_info_body != null && m.hasOwnProperty("get_conversation_core_info_body"))
                $root.im_proto.GetConversationCoreInfoResponseBody.encode(m.get_conversation_core_info_body, w.uint32(7210).fork()).ldelim();
            if (m.set_conversation_core_info_body != null && m.hasOwnProperty("set_conversation_core_info_body"))
                $root.im_proto.SetConversationCoreInfoResponseBody.encode(m.set_conversation_core_info_body, w.uint32(7218).fork()).ldelim();
            if (m.get_conversation_core_info_list_body != null && m.hasOwnProperty("get_conversation_core_info_list_body"))
                $root.im_proto.GetConversationCoreInfoListResponseBody.encode(m.get_conversation_core_info_list_body, w.uint32(7226).fork()).ldelim();
            if (m.upsert_conversation_core_ext_info_body != null && m.hasOwnProperty("upsert_conversation_core_ext_info_body"))
                $root.im_proto.UpsertConversationCoreExtInfoResponseBody.encode(m.upsert_conversation_core_ext_info_body, w.uint32(7234).fork()).ldelim();
            if (m.delete_conversation_core_ext_info_body != null && m.hasOwnProperty("delete_conversation_core_ext_info_body"))
                $root.im_proto.DeleteConversationCoreExtInfoResponseBody.encode(m.delete_conversation_core_ext_info_body, w.uint32(7242).fork()).ldelim();
            if (m.get_conversation_setting_info_body != null && m.hasOwnProperty("get_conversation_setting_info_body"))
                $root.im_proto.GetConversationSettingInfoResponseBody.encode(m.get_conversation_setting_info_body, w.uint32(7362).fork()).ldelim();
            if (m.set_conversation_setting_info_body != null && m.hasOwnProperty("set_conversation_setting_info_body"))
                $root.im_proto.SetConversationSettingInfoResponseBody.encode(m.set_conversation_setting_info_body, w.uint32(7370).fork()).ldelim();
            if (m.upsert_conversation_setting_ext_info_body != null && m.hasOwnProperty("upsert_conversation_setting_ext_info_body"))
                $root.im_proto.UpsertConversationSettingExtInfoResponseBody.encode(m.upsert_conversation_setting_ext_info_body, w.uint32(7378).fork()).ldelim();
            if (m.delete_conversation_setting_ext_info_body != null && m.hasOwnProperty("delete_conversation_setting_ext_info_body"))
                $root.im_proto.DeleteConversationSettingExtInfoResponseBody.encode(m.delete_conversation_setting_ext_info_body, w.uint32(7386).fork()).ldelim();
            if (m.get_stranger_conversation_body != null && m.hasOwnProperty("get_stranger_conversation_body"))
                $root.im_proto.GetStrangerConversationListResponseBody.encode(m.get_stranger_conversation_body, w.uint32(8002).fork()).ldelim();
            if (m.get_stranger_messages_body != null && m.hasOwnProperty("get_stranger_messages_body"))
                $root.im_proto.GetStrangerMessagesResponseBody.encode(m.get_stranger_messages_body, w.uint32(8010).fork()).ldelim();
            if (m.delete_stranger_message_body != null && m.hasOwnProperty("delete_stranger_message_body"))
                $root.im_proto.DeleteStrangerMessageResponseBody.encode(m.delete_stranger_message_body, w.uint32(8018).fork()).ldelim();
            if (m.delete_stranger_conversation_body != null && m.hasOwnProperty("delete_stranger_conversation_body"))
                $root.im_proto.DeleteStrangerConversationResponseBody.encode(m.delete_stranger_conversation_body, w.uint32(8026).fork()).ldelim();
            if (m.delete_stranger_all_conversation_body != null && m.hasOwnProperty("delete_stranger_all_conversation_body"))
                $root.im_proto.DeleteStrangerAllConversationResponseBody.encode(m.delete_stranger_all_conversation_body, w.uint32(8034).fork()).ldelim();
            if (m.mark_stranger_conversation_read_body != null && m.hasOwnProperty("mark_stranger_conversation_read_body"))
                $root.im_proto.MarkStrangerConversationReadResponseBody.encode(m.mark_stranger_conversation_read_body, w.uint32(8042).fork()).ldelim();
            if (m.mark_stranger_all_conversation_read_body != null && m.hasOwnProperty("mark_stranger_all_conversation_read_body"))
                $root.im_proto.MarkStrangerAllConversationReadResponseBody.encode(m.mark_stranger_all_conversation_read_body, w.uint32(8050).fork()).ldelim();
            return w;
        };

        ResponseBody.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.ResponseBody();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 100:
                    m.send_message_body = $root.im_proto.SendMessageResponseBody.decode(r, r.uint32());
                    break;
                case 200:
                    m.messages_per_user_body = $root.im_proto.MessagesPerUserResponseBody.decode(r, r.uint32());
                    break;
                case 201:
                    m.messages_per_user_init_body = $root.im_proto.MessagesPerUserInitResponseBody.decode(r, r.uint32());
                    break;
                case 203:
                    m.messages_per_user_init_v2_body = $root.im_proto.MessagesPerUserInitV2ResponseBody.decode(r, r.uint32());
                    break;
                case 300:
                    m.conversations_list_body = $root.im_proto.ConversationsListResponseBody.decode(r, r.uint32());
                    break;
                case 301:
                    m.messages_in_conversation_body = $root.im_proto.MessagesInConversationResponseBody.decode(r, r.uint32());
                    break;
                case 410:
                    m.send_user_action_body = $root.im_proto.SendUserActionResponseBody.decode(r, r.uint32());
                    break;
                case 500:
                    m.has_new_message_notify = $root.im_proto.NewMessageNotify.decode(r, r.uint32());
                    break;
                case 501:
                    m.mark_conversation_read_notify = $root.im_proto.MarkConversationReadNotify.decode(r, r.uint32());
                    break;
                case 502:
                    m.conversation_info_updated_notify = $root.im_proto.ConversationInfoUpdatedNotify.decode(r, r.uint32());
                    break;
                case 503:
                    m.stranger_has_new_message_notify = $root.im_proto.StrangerNewMessageNotify.decode(r, r.uint32());
                    break;
                case 600:
                    m.get_conversation_info_body = $root.im_proto.GetConversationInfoResponseBody.decode(r, r.uint32());
                    break;
                case 601:
                    m.set_conversation_info_body = $root.im_proto.SetConversationInfoResponseBody.decode(r, r.uint32());
                    break;
                case 602:
                    m.create_conversation_body = $root.im_proto.CreateConversationResponseBody.decode(r, r.uint32());
                    break;
                case 607:
                    m.get_conversations_info_list_body = $root.im_proto.GetConversationInfoListResponseBody.decode(r, r.uint32());
                    break;
                case 608:
                    m.get_conversation_info_v2_body = $root.im_proto.GetConversationInfoV2ResponseBody.decode(r, r.uint32());
                    break;
                case 609:
                    m.create_conversation_v2_body = $root.im_proto.CreateConversationV2ResponseBody.decode(r, r.uint32());
                    break;
                case 610:
                    m.get_conversation_info_list_v2_body = $root.im_proto.GetConversationInfoListV2ResponseBody.decode(r, r.uint32());
                    break;
                case 611:
                    m.get_conversation_info_list_by_favorite_v2_body = $root.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.decode(r, r.uint32());
                    break;
                case 612:
                    m.get_conversation_info_list_by_top_v2_body = $root.im_proto.GetConversationInfoListByTopV2ResponseBody.decode(r, r.uint32());
                    break;
                case 605:
                    m.conversation_participants_body = $root.im_proto.ConversationParticipantsListResponseBody.decode(r, r.uint32());
                    break;
                case 650:
                    m.conversation_add_participants_body = $root.im_proto.ConversationAddParticipantsResponseBody.decode(r, r.uint32());
                    break;
                case 651:
                    m.conversation_remove_participants_body = $root.im_proto.ConversationRemoveParticipantsResponseBody.decode(r, r.uint32());
                    break;
                case 653:
                    m.conversation_set_role_body = $root.im_proto.ConversationSetRoleResponseBody.decode(r, r.uint32());
                    break;
                case 654:
                    m.mget_conversation_participants_body = $root.im_proto.MgetConversationParticipantsResponseBody.decode(r, r.uint32());
                    break;
                case 655:
                    m.update_conversation_participant_body = $root.im_proto.UpdateConversationParticipantResponseBody.decode(r, r.uint32());
                    break;
                case 801:
                    m.get_group_info_body = $root.im_proto.GetGroupInfoResponseBody.decode(r, r.uint32());
                    break;
                case 802:
                    m.set_group_info_body = $root.im_proto.SetGroupInfoResponseBody.decode(r, r.uint32());
                    break;
                case 803:
                    m.get_groups_info_body = $root.im_proto.GetGroupInfoListResponseBody.decode(r, r.uint32());
                    break;
                case 901:
                    m.get_conversation_core_info_body = $root.im_proto.GetConversationCoreInfoResponseBody.decode(r, r.uint32());
                    break;
                case 902:
                    m.set_conversation_core_info_body = $root.im_proto.SetConversationCoreInfoResponseBody.decode(r, r.uint32());
                    break;
                case 903:
                    m.get_conversation_core_info_list_body = $root.im_proto.GetConversationCoreInfoListResponseBody.decode(r, r.uint32());
                    break;
                case 904:
                    m.upsert_conversation_core_ext_info_body = $root.im_proto.UpsertConversationCoreExtInfoResponseBody.decode(r, r.uint32());
                    break;
                case 905:
                    m.delete_conversation_core_ext_info_body = $root.im_proto.DeleteConversationCoreExtInfoResponseBody.decode(r, r.uint32());
                    break;
                case 920:
                    m.get_conversation_setting_info_body = $root.im_proto.GetConversationSettingInfoResponseBody.decode(r, r.uint32());
                    break;
                case 921:
                    m.set_conversation_setting_info_body = $root.im_proto.SetConversationSettingInfoResponseBody.decode(r, r.uint32());
                    break;
                case 922:
                    m.upsert_conversation_setting_ext_info_body = $root.im_proto.UpsertConversationSettingExtInfoResponseBody.decode(r, r.uint32());
                    break;
                case 923:
                    m.delete_conversation_setting_ext_info_body = $root.im_proto.DeleteConversationSettingExtInfoResponseBody.decode(r, r.uint32());
                    break;
                case 1000:
                    m.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListResponseBody.decode(r, r.uint32());
                    break;
                case 1001:
                    m.get_stranger_messages_body = $root.im_proto.GetStrangerMessagesResponseBody.decode(r, r.uint32());
                    break;
                case 1002:
                    m.delete_stranger_message_body = $root.im_proto.DeleteStrangerMessageResponseBody.decode(r, r.uint32());
                    break;
                case 1003:
                    m.delete_stranger_conversation_body = $root.im_proto.DeleteStrangerConversationResponseBody.decode(r, r.uint32());
                    break;
                case 1004:
                    m.delete_stranger_all_conversation_body = $root.im_proto.DeleteStrangerAllConversationResponseBody.decode(r, r.uint32());
                    break;
                case 1005:
                    m.mark_stranger_conversation_read_body = $root.im_proto.MarkStrangerConversationReadResponseBody.decode(r, r.uint32());
                    break;
                case 1006:
                    m.mark_stranger_all_conversation_read_body = $root.im_proto.MarkStrangerAllConversationReadResponseBody.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResponseBody;
    })();

    im_proto.Response = (function() {

        function Response(p) {
            this.headers = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Response.prototype.cmd = 0;
        Response.prototype.sequence_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Response.prototype.status_code = 0;
        Response.prototype.error_desc = "";
        Response.prototype.inbox_type = 0;
        Response.prototype.body = null;
        Response.prototype.log_id = "";
        Response.prototype.headers = $util.emptyObject;

        Response.create = function create(properties) {
            return new Response(properties);
        };

        Response.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && m.hasOwnProperty("cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.sequence_id != null && m.hasOwnProperty("sequence_id"))
                w.uint32(16).int64(m.sequence_id);
            if (m.status_code != null && m.hasOwnProperty("status_code"))
                w.uint32(24).int32(m.status_code);
            if (m.error_desc != null && m.hasOwnProperty("error_desc"))
                w.uint32(34).string(m.error_desc);
            if (m.inbox_type != null && m.hasOwnProperty("inbox_type"))
                w.uint32(40).int32(m.inbox_type);
            if (m.body != null && m.hasOwnProperty("body"))
                $root.im_proto.ResponseBody.encode(m.body, w.uint32(50).fork()).ldelim();
            if (m.log_id != null && m.hasOwnProperty("log_id"))
                w.uint32(58).string(m.log_id);
            if (m.headers != null && m.hasOwnProperty("headers")) {
                for (var ks = Object.keys(m.headers), i = 0; i < ks.length; ++i) {
                    w.uint32(66).fork().uint32(10).string(ks[i]).uint32(18).string(m.headers[ks[i]]).ldelim();
                }
            }
            return w;
        };

        Response.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.im_proto.Response(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.sequence_id = r.int64();
                    break;
                case 3:
                    m.status_code = r.int32();
                    break;
                case 4:
                    m.error_desc = r.string();
                    break;
                case 5:
                    m.inbox_type = r.int32();
                    break;
                case 6:
                    m.body = $root.im_proto.ResponseBody.decode(r, r.uint32());
                    break;
                case 7:
                    m.log_id = r.string();
                    break;
                case 8:
                    r.skip().pos++;
                    if (m.headers === $util.emptyObject)
                        m.headers = {};
                    k = r.string();
                    r.pos++;
                    m.headers[k] = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Response;
    })();

    return im_proto;
})();

export { $root as default };