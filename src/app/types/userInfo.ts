type MarkAttribute = {
    href: string;
    uuid: string | null;
    anchor: string | null;
    custom: Record<string, unknown>;
    target: string;
    linktype: string;
};

type Mark = {
    type: string;
    attrs?: MarkAttribute;
};

type ContentText = {
    text: string;
    type: string;
    marks?: Mark[];
};

type ParagraphContent = ContentText | { type: 'hard_break' };

type Paragraph = {
    type: 'paragraph';
    content: ParagraphContent[];
};

type Document = {
    type: 'doc';
    content: Paragraph[];
};

type Asset = {
    id: number | string;
    alt: string;
    name: string;
    focus: string;
    title: string;
    filename: string;
    copyright: string;
    fieldtype: 'asset';
    is_external_url: boolean;
};

export interface UserInfo {
    bio: Document;
    _uid: string;
    name: string;
    slug: string;
    profile: Asset;
    component: 'user_info';
    description: Document;
    _editable: string;
}
