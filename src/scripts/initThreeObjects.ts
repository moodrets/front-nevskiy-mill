import { ThreeScene } from '@/scripts/threeScene'
import { routerPath } from '@/routes'

export function initThreeObjects() {
    const mainThreeObject: Record<any, any> = new ThreeScene({
        filePath: `${routerPath}models/tomato-basil.glb`,
        renderElem: document.querySelector('.three-object--main'),
        modelInitialRotation: {
            y: 0,
            x: .45,
            z: 0
        },
        modelInitialPosition: {
            y: -45,
            x: 0,
            z: 8
        },
        modelMoveAnimationSettings: {
            direction: 'left',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5]
        }
    } as any);

    const secondaryThreeObject: Record<any, any> = new ThreeScene({
        filePath: `${routerPath}models/apple-carrot.glb`,
        renderElem: document.querySelector('.three-object--secondary'),
        modelInitialRotation: {
            y: 0,
            x: -.45,
            z: 0
        },
        modelInitialPosition: {
            y: -27,
            x: 0,
            z: 30
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5]
        }
    } as any);

    (window as any).mainThreeObject = mainThreeObject as any;
    (window as any).secondaryThreeObject = secondaryThreeObject as any;

    // let lastKnownScrollPosition = 0;
    // let deltaY = 0;

    // function moveThreeObjectsOnScroll(event: any) {
    //     let ticking = false;

    //     if (!ticking) {
    //         window.requestAnimationFrame(() => {

    //             deltaY = window.scrollY - lastKnownScrollPosition;
    //             lastKnownScrollPosition = window.scrollY;

    //             if (mainThreeObject.model) {
    //                 mainThreeObject.model.rotation.z += deltaY * 0.0009
    //             }

    //             if (secondaryThreeObject.model) {
    //                 secondaryThreeObject.model.rotation.z += deltaY * 0.0009
    //             }

    //             ticking = false;
    //         });
    //         ticking = true;
    //     }
    // }

    // document.removeEventListener('scroll', moveThreeObjectsOnScroll)
    // document.addEventListener('scroll', moveThreeObjectsOnScroll)
}