/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
export function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        const img = new Image();
        img.onload = (/**
         * @return {?}
         */
        () => {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            const supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
export function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2: return { rotate: 0, flip: true };
        case 3: return { rotate: 2, flip: false };
        case 4: return { rotate: 2, flip: true };
        case 5: return { rotate: 1, flip: true };
        case 6: return { rotate: 1, flip: false };
        case 7: return { rotate: 3, flip: true };
        case 8: return { rotate: 3, flip: false };
        default: return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    const length = view.byteLength;
    /** @type {?} */
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    const binaryString = atob(imageBase64);
    /** @type {?} */
    const len = binaryString.length;
    /** @type {?} */
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpZi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbWFnZS1jcm9wcGVyLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2V4aWYudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFLTSwyQkFBMkIsR0FDN0Isd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwyREFBMkQ7Ozs7QUFFL0QsTUFBTSxVQUFVLHlCQUF5QjtJQUNyQyxPQUFPLElBQUksT0FBTzs7OztJQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O2NBQ3JCLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN2QixHQUFHLENBQUMsTUFBTTs7O1FBQUcsR0FBRyxFQUFFOzs7a0JBRVIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNyRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFBLENBQUM7UUFDRixHQUFHLENBQUMsR0FBRyxHQUFHLDJCQUEyQixDQUFDO0lBQzFDLENBQUMsRUFBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQUMseUJBQTBDO0lBQ3JGLElBQUksT0FBTyx5QkFBeUIsS0FBSyxRQUFRLEVBQUU7UUFDL0MseUJBQXlCLEdBQUcsZUFBZSxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDMUU7SUFDRCxRQUFRLHlCQUF5QixFQUFFO1FBQy9CLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxD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QUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7O1VBQy9ELFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztVQUNoQyxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU07O1VBQ3pCLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhpZlRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZXhpZi10cmFuc2Zvcm0uaW50ZXJmYWNlJztcblxuLy8gQmxhY2sgMngxIEpQRUcsIHdpdGggdGhlIGZvbGxvd2luZyBtZXRhIGluZm9ybWF0aW9uIHNldDpcbi8vIC0gRVhJRiBPcmllbnRhdGlvbjogNiAoUm90YXRlZCA5MMKwIENDVylcbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1Mb2FkLUltYWdlXG5jb25zdCB0ZXN0QXV0b09yaWVudGF0aW9uSW1hZ2VVUkwgPVxuICAgICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFpUlhocFpnQUFUVTBBS2dBQUFBZ0FBUUVTQUFNQUFBQUJBQVlBQUFBJyArXG4gICAgJ0FBQUQvMndDRUFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkEnICtcbiAgICAnUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRScgK1xuICAgICdCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFmL0FBQkVJQUFFQUFnTUJFUUFDRVFFREVRSC94JyArXG4gICAgJ0FCS0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBTEVBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRRUFBQUFBQUFBQUFBQUFBQUEnICtcbiAgICAnQUFBQUFFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BREFNQkFBSVJBeEVBUHdBLzhILy8yUT09JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQXV0b21hdGljUm90YXRpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYnJvd3NlciBzdXBwb3J0cyBhdXRvbWF0aWMgaW1hZ2Ugb3JpZW50YXRpb246XG4gICAgICAgICAgICBjb25zdCBzdXBwb3J0ZWQgPSBpbWcud2lkdGggPT09IDEgJiYgaW1nLmhlaWdodCA9PT0gMjtcbiAgICAgICAgICAgIHJlc29sdmUoc3VwcG9ydGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLnNyYyA9IHRlc3RBdXRvT3JpZW50YXRpb25JbWFnZVVSTDtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybWF0aW9uc0Zyb21FeGlmRGF0YShleGlmUm90YXRpb25PckJhc2U2NEltYWdlOiBudW1iZXIgfCBzdHJpbmcpOiBFeGlmVHJhbnNmb3JtIHtcbiAgICBpZiAodHlwZW9mIGV4aWZSb3RhdGlvbk9yQmFzZTY0SW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGV4aWZSb3RhdGlvbk9yQmFzZTY0SW1hZ2UgPSBnZXRFeGlmUm90YXRpb24oZXhpZlJvdGF0aW9uT3JCYXNlNjRJbWFnZSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZXhpZlJvdGF0aW9uT3JCYXNlNjRJbWFnZSkge1xuICAgICAgICBjYXNlIDI6IHJldHVybiB7cm90YXRlOiAwLCBmbGlwOiB0cnVlfTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4ge3JvdGF0ZTogMiwgZmxpcDogZmFsc2V9O1xuICAgICAgICBjYXNlIDQ6IHJldHVybiB7cm90YXRlOiAyLCBmbGlwOiB0cnVlfTtcbiAgICAgICAgY2FzZSA1OiByZXR1cm4ge3JvdGF0ZTogMSwgZmxpcDogdHJ1ZX07XG4gICAgICAgIGNhc2UgNjogcmV0dXJuIHtyb3RhdGU6IDEsIGZsaXA6IGZhbHNlfTtcbiAgICAgICAgY2FzZSA3OiByZXR1cm4ge3JvdGF0ZTogMywgZmxpcDogdHJ1ZX07XG4gICAgICAgIGNhc2UgODogcmV0dXJuIHtyb3RhdGU6IDMsIGZsaXA6IGZhbHNlfTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHtyb3RhdGU6IDAsIGZsaXA6IGZhbHNlfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4aWZSb3RhdGlvbihpbWFnZUJhc2U2NDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQpKTtcbiAgICBpZiAodmlldy5nZXRVaW50MTYoMCwgZmFsc2UpICE9IDB4RkZEOCkge1xuICAgICAgICByZXR1cm4gLTI7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aDtcbiAgICBsZXQgb2Zmc2V0ID0gMjtcbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAyLCBmYWxzZSkgPD0gOCkgcmV0dXJuIC0xO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgIGlmIChtYXJrZXIgPT0gMHhGRkUxKSB7XG4gICAgICAgICAgICBpZiAodmlldy5nZXRVaW50MzIob2Zmc2V0ICs9IDIsIGZhbHNlKSAhPSAweDQ1Nzg2OTY2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXR0bGUgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQgKz0gNiwgZmFsc2UpID09IDB4NDk0OTtcbiAgICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQzMihvZmZzZXQgKyA0LCBsaXR0bGUpO1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgbGl0dGxlKTtcbiAgICAgICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmlldy5nZXRVaW50MTYob2Zmc2V0ICsgKGkgKiAxMiksIGxpdHRsZSkgPT0gMHgwMTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAoaSAqIDEyKSArIDgsIGxpdHRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChtYXJrZXIgJiAweEZGMDApICE9IDB4RkYwMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0FycmF5QnVmZmVyKGltYWdlQmFzZTY0OiBzdHJpbmcpIHtcbiAgICBpbWFnZUJhc2U2NCA9IGltYWdlQmFzZTY0LnJlcGxhY2UoL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9nbWksICcnKTtcbiAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSBhdG9iKGltYWdlQmFzZTY0KTtcbiAgICBjb25zdCBsZW4gPSBiaW5hcnlTdHJpbmcubGVuZ3RoO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcy5idWZmZXI7XG59XG4iXX0=