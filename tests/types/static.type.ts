export type StaticType = {
    [key: string]: unknown
    /**
     * Boolean value to trigger the gathering of new baseline images for visual validation
     * New images will automatically be saved to the expectedImage location when no expected image for the validation check is found.
     */
    getVisualValidationBaselines: boolean
};
