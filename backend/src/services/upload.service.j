export const uploadFile = async (file) => {
    if (!file) {
        throw new Error("No file uploaded");
    }

    return {
        filename: file.filename,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        path: file.path,
    };
};