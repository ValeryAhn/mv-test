/**
 * Интерфейс ответа с новостями
 *
 * @export
 * @interface NewsResponse
 */
export interface NewsResponse {
    status?: string;
    totalResults?: number;
    results?: News[];
}

/**
 * Интерфейс новости
 *
 * @export
 * @interface News
 */
export interface News {
    creator?: string;
    country?: string;
    description?: string;
    pubDate?: string;
    title?: string;
}

/**
 * Интерфейс информации о пагинации при получении списка новостей
 *
 * @export
 * @interface NewsResponsePagination
 */
export interface NewsResponsePagination {
    limit?: number;
    count?: number;
    offset?: number;
    total?: number
}

/**
 * Интерфейс обмена данными
 *
 * @export
 * @interface NewsData
 */
export interface NewsData {
    news?: News;
    pageIndex?: number
}