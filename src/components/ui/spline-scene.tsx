'use client';

import { Suspense, lazy, useCallback } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const handleLoad = useCallback((splineApp: any) => {
        // Hide the helper target objects (wireframe balls) while keeping them functional
        const objectsToHide = ['Target Head', 'Target Movement', 'Cursor Target'];
        objectsToHide.forEach((name) => {
            const obj = splineApp.findObjectByName(name);
            if (obj) {
                obj.visible = false;
            }
        });

        // Make the background transparent via WebGL alpha
        const activePage = splineApp._scene?.activePage;
        if (activePage && activePage.bgColor) {
            activePage.bgColor.a = 0; // Set alpha to 0
        }

        // Hide WebGL watermark logo
        if (splineApp._renderer && splineApp._renderer.pipeline) {
            splineApp._renderer.pipeline.setWatermark(null);
        }

        // Hide DOM watermark if it exists (legacy wrapper)
        if (splineApp.canvas && splineApp.canvas.parentElement) {
            const logo = splineApp.canvas.parentElement.querySelector('a');
            if (logo) logo.style.display = 'none';
        }
    }, []);

    return (
        <Suspense
            fallback={
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                    }}
                >
                    <span className="w-8 h-8 rounded-full border-2 border-[rgba(26,26,26,0.1)] border-t-[rgba(26,26,26,0.5)] animate-spin" />
                </div>
            }
        >
            <Spline scene={scene} className={className} onLoad={handleLoad} />
        </Suspense>
    );
}
