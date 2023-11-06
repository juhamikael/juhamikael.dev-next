type TextBlockChild = {
    text: string;
    type: string;
};

type TextBlock = {
    type: string;
    content: TextBlockChild[];
};

type DocumentBody = {
    type: string;
    content: TextBlock[];
};

type MultiLink = {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
};

type Asset = {
    id: string | null;
    alt: string | null;
    name: string;
    focus: string | null;
    title: string | null;
    source: string | null;
    filename: string;
    copyright: string | null;
    fieldtype: string;
    meta_data: Record<string, unknown>;
};

type LanguageTag = string;

export interface ProjectData {
    _uid: string;
    body: DocumentBody;
    live: MultiLink;
    slug: string;
    image: Asset;
    title: string;
    github: MultiLink;
    download: MultiLink;
    component: string;
    language_tags: LanguageTag[];
    _editable: string;
}
