import { ref } from "vue";

export interface IArticleMoreInfo {
    img: string,
    title: string,
    text: string
}

export const articleMoreInfo = ref<IArticleMoreInfo | null>()