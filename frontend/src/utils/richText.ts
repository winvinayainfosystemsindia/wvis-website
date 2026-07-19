export const stripHtml = (html: string): string => {
	const doc = new DOMParser().parseFromString(html, 'text/html');
	return doc.body.textContent ?? '';
};

export const isRichTextEmpty = (html: string): boolean => stripHtml(html).trim().length === 0;
