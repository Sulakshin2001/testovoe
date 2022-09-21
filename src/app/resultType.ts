export type Root = RootChild[];
export type RootChildWhatWillYouLearn = {
    _id: string;
    string: string;
    __v: number;
    id: string;
}
export type RootChildSpecializedSubjects = {
    _id: string;
    string: string;
    __v: number;
    id: string;
}
export type RootChildBaseSubjects = {
    _id: string;
    string: string;
    __v: number;
    id: string;
}
export type RootChildProgramModulesCounters = {
    leftCounter: string;
    rightCounter: string;
    _id: string;
    __v: number;
    id: string;
}
export type RootChildSpecializedSubjectsAddons = {
    _id: string;
    Practice: boolean;
    __v: number;
    id: string;
}
export type RootChildCategoryLocalizationsId = {
    type: string;
    data: number[];
}
export type RootChildCategoryLocalizations = {
    _id: string;
    id: RootChildCategoryLocalizationsId;
}
export type RootChildCategoryLabelCases = {
    _id: string;
    singular: string;
    plural: string;
    __v: number;
    id: string;
}
export type RootChildCategory = {
    copyToKk: boolean;
    localizations: RootChildCategoryLocalizations[];
    _id: string;
    slug: string;
    type: string;
    description: string;
    locale: string;
    published_at: string;
    labelCases: RootChildCategoryLabelCases;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export type RootChildPictureProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildPictureFormatsThumbnailProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildPictureFormatsThumbnail = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildPictureFormatsThumbnailProvider_metadata;
}
export type RootChildPictureFormatsLargeProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildPictureFormatsLarge = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildPictureFormatsLargeProvider_metadata;
}
export type RootChildPictureFormatsMediumProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildPictureFormatsMedium = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildPictureFormatsMediumProvider_metadata;
}
export type RootChildPictureFormatsSmallProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildPictureFormatsSmall = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildPictureFormatsSmallProvider_metadata;
}
export type RootChildPictureFormats = {
    thumbnail: RootChildPictureFormatsThumbnail;
    large: RootChildPictureFormatsLarge;
    medium: RootChildPictureFormatsMedium;
    small: RootChildPictureFormatsSmall;
}
export type RootChildPicture = {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    provider_metadata: RootChildPictureProvider_metadata;
    formats: RootChildPictureFormats;
    provider: string;
    related: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export type RootChildTeachersLocalizationsId = {
    type: string;
    data: number[];
}
export type RootChildTeachersLocalizations = {
    _id: string;
    id: RootChildTeachersLocalizationsId;
}
export type RootChildTeachersPortraitProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildTeachersPortraitFormatsThumbnailProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildTeachersPortraitFormatsThumbnail = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildTeachersPortraitFormatsThumbnailProvider_metadata;
}
export type RootChildTeachersPortraitFormatsSmallProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildTeachersPortraitFormatsSmall = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildTeachersPortraitFormatsSmallProvider_metadata;
}
export type RootChildTeachersPortraitFormats = {
    thumbnail: RootChildTeachersPortraitFormatsThumbnail;
    small: RootChildTeachersPortraitFormatsSmall;
}
export type RootChildTeachersPortrait = {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    provider_metadata: RootChildTeachersPortraitProvider_metadata;
    formats: RootChildTeachersPortraitFormats;
    provider: string;
    related: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export type RootChildTeachersDescriptionItems = {
    _id: string;
    item: string;
    __v: number;
    id: string;
}
export type RootChildTeachers = {
    copyToKk: boolean;
    programs: string[];
    localizations: RootChildTeachersLocalizations[];
    _id: string;
    name: string;
    description: string;
    locale: string;
    published_at: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    portrait: RootChildTeachersPortrait;
    descriptionItems: RootChildTeachersDescriptionItems[];
    id: string;
}
export type RootChildJournal_articlesPdfMaterialsProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildJournal_articlesPdfMaterials = {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    provider_metadata: RootChildJournal_articlesPdfMaterialsProvider_metadata;
    provider: string;
    width?: any;
    height?: any;
    related: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export type RootChildJournal_articlesArticleBodyParagraphBody = {
    _id: string;
    isLarger: boolean;
    text: string;
    isHighlighted: boolean;
    title: string;
    __v: number;
    id: string;
}
export type RootChildJournal_articlesArticleBody = {
    __component: string;
    _id: string;
    paragraphBody: RootChildJournal_articlesArticleBodyParagraphBody[];
    __v: number;
    id: string;
}
export type RootChildJournal_articlesPictureProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildJournal_articlesPictureFormatsThumbnailProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildJournal_articlesPictureFormatsThumbnail = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildJournal_articlesPictureFormatsThumbnailProvider_metadata;
}
export type RootChildJournal_articlesPictureFormatsMediumProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildJournal_articlesPictureFormatsMedium = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildJournal_articlesPictureFormatsMediumProvider_metadata;
}
export type RootChildJournal_articlesPictureFormatsSmallProvider_metadata = {
    public_id: string;
    resource_type: string;
}
export type RootChildJournal_articlesPictureFormatsSmall = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: RootChildJournal_articlesPictureFormatsSmallProvider_metadata;
}
export type RootChildJournal_articlesPictureFormats = {
    thumbnail: RootChildJournal_articlesPictureFormatsThumbnail;
    medium: RootChildJournal_articlesPictureFormatsMedium;
    small: RootChildJournal_articlesPictureFormatsSmall;
}
export type RootChildJournal_articlesPicture = {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    provider_metadata: RootChildJournal_articlesPictureProvider_metadata;
    formats: RootChildJournal_articlesPictureFormats;
    provider: string;
    related: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export type RootChildJournal_articles = {
    journal_tags: string[];
    journal_authors: string[];
    programs: string[];
    pdfMaterials: RootChildJournal_articlesPdfMaterials[];
    _id: string;
    published_at: string;
    shortDescription: string;
    slug: string;
    title: string;
    articleBody: RootChildJournal_articlesArticleBody[];
    journalAuthors: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    picture: RootChildJournal_articlesPicture;
    journal_category: string;
    id: string;
}
export type RootChild = {
    studyFormat: string;
    subjectsStickerType: string;
    icon: string;
    questions: any[];
    reviews: any[];
    localizations: any[];
    _id: string;
    published_at: string;
    locale: string;
    goal: string;
    slug: string;
    title: string;
    whatWillYouLearn: RootChildWhatWillYouLearn[];
    specializedSubjects: RootChildSpecializedSubjects[];
    duration?: any;
    baseSubjects: RootChildBaseSubjects[];
    programModulesCounters: RootChildProgramModulesCounters;
    diplomas: any[];
    whoIsFor: any[];
    specializedSubjectsAddons: RootChildSpecializedSubjectsAddons;
    createdAt: string;
    updatedAt: string;
    __v: number;
    category: RootChildCategory;
    picture: RootChildPicture;
    teachers: RootChildTeachers[];
    journal_articles: RootChildJournal_articles[];
    id: string;
}