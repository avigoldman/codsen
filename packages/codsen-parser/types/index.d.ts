declare type Range = [from: number, to: number] | [from: number, to: number, whatToInsert: string | null | undefined];
declare type Ranges = Range[] | null;

interface Selector {
    value: string;
    selectorStarts: number;
    selectorEnds: number;
}
declare type TokenType = "text" | "tag" | "rule" | "at" | "comment" | "esp";
declare type TokenKind = "simplet" | "not" | "doctype" | "cdata" | "xml" | "inline";
declare type CommentKind = "simple" | "only" | "not" | "block" | "line" | "simplet";
interface TextToken {
    type: "text";
    start: number;
    end: number;
    value: string;
}
interface CommentToken {
    type: "comment";
    start: number;
    end: number;
    value: string;
    closing: null | boolean;
    kind: CommentKind;
    language: "html" | "css";
}
interface EspToken {
    type: "esp";
    start: number;
    end: number;
    value: string;
    head: null | string;
    headStartsAt: null | number;
    headEndsAt: null | number;
    tail: null | string;
    tailStartsAt: null | number;
    tailEndsAt: null | number;
}
declare type PropertyValueWithinArray = TextToken | EspToken;
interface Property {
    property: null | string;
    propertyStarts: null | number;
    propertyEnds: null | number;
    colon: null | number;
    value: string | PropertyValueWithinArray[];
    valueStarts: null | number;
    valueEnds: null | number;
    importantStarts: null | number;
    importantEnds: null | number;
    important: null | string;
    semi: null | number;
    start: number;
    end: number;
}
interface Attrib {
    attribName: string;
    attribNameRecognised: boolean;
    attribNameStartsAt: number;
    attribNameEndsAt: number;
    attribOpeningQuoteAt: null | number;
    attribClosingQuoteAt: null | number;
    attribValueRaw: string;
    attribValue: (TextToken | Property | CommentToken | EspToken)[];
    attribValueStartsAt: null | number;
    attribValueEndsAt: null | number;
    attribStarts: number;
    attribEnds: number;
    attribLeft: number;
}
interface RuleToken {
    type: "rule";
    start: number;
    end: number;
    value: string;
    left: null | number;
    nested: null | boolean;
    openingCurlyAt: null | number;
    closingCurlyAt: null | number;
    selectorsStart: null | number;
    selectorsEnd: null | number;
    selectors: Selector[];
    properties: (Property | TextToken)[];
}
interface TagToken {
    type: "tag";
    start: number;
    end: number;
    value: string;
    tagNameStartsAt: number;
    tagNameEndsAt: number;
    tagName: string;
    recognised: null | boolean;
    closing: null | boolean;
    void: null | boolean;
    pureHTML: null | boolean;
    kind: null | TokenKind;
    attribs: Attrib[];
}
interface AtToken {
    type: "at";
    start: number;
    end: number;
    value: string;
    left: null | number;
    nested: null | false;
    identifier: null | string;
    identifierStartsAt: null | number;
    identifierEndsAt: null | number;
    query: string;
    queryStartsAt: number;
    queryEndsAt: number;
    openingCurlyAt: null | number;
    closingCurlyAt: null | number;
    rules: (RuleToken | TextToken)[];
}
interface CharacterToken {
    chr: string;
    i: number;
    type: TokenType;
}
declare type CharCb = (token: CharacterToken, next: CharacterToken[]) => void;

declare const version: string;

declare type Severity = 0 | 1 | 2;
interface ErrorObj {
    ruleId?: string;
    message: string;
    idxFrom: number;
    idxTo: number;
    fix: null | {
        ranges: Ranges;
    };
    severity?: Severity;
    keepSeparateWhenFixing?: boolean;
}
interface TagTokenWithChildren extends TagToken {
    children: TokenWithChildren[];
}
interface CommentTokenWithChildren extends CommentToken {
    children: TokenWithChildren[];
}
declare type TokenWithChildren = TextToken | TagTokenWithChildren | RuleToken | AtToken | CommentTokenWithChildren | EspToken;
interface SupplementedErrorObj extends ErrorObj {
    tokenObj: TokenWithChildren;
}
declare type ErrCb = (obj: Partial<SupplementedErrorObj>) => void;
interface Opts {
    reportProgressFunc: null | ((percDone: number) => void);
    reportProgressFuncFrom: number;
    reportProgressFuncTo: number;
    tagCb: null | ((obj: TokenWithChildren) => void);
    charCb: null | CharCb;
    errCb: null | ErrCb;
}
declare const defaults: Opts;
/**
 * Parser aiming at broken or mixed code, especially HTML & CSS
 */
declare function cparser(str: string, originalOpts?: Partial<Opts>): any[];

export { CommentTokenWithChildren, ErrorObj, TagTokenWithChildren, TokenWithChildren, cparser, defaults, version };
