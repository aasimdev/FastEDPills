import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Breadcrumb = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState();
    useEffect(() => {
        const pathWithoutQuery = router.asPath.split("#")[0];
        let pathArray = pathWithoutQuery.split("/");
        pathArray.shift();

        pathArray = pathArray.filter((path) => path !== "");

        const breadcrumbs = pathArray.map((path, index) => {
            const href = "/" + pathArray.slice(0, index + 1).join("/");
            return {
                href,
                label: path.replace(/-/g, " "),
            };
        });

        setBreadcrumbs(breadcrumbs);
    }, [router.asPath]);
    
    console.log(router);
    return (
        <div className='mx-auto px-12 xl:px-0 max-w-screen-xl py-3 lg:py-5 hidden md:block'>
            <nav className="flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-3">
                    <li>
                        <div>
                            <a href="#" className="text-blue text-sm hover:text-blue">
                                Home
                            </a>
                        </div>
                    </li>
                    <li>
                        {breadcrumbs &&
                            breadcrumbs.map((breadcrumb) => (
                                <div className="flex items-center" key={breadcrumb.href}>
                                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3 text-sm text-text hover:text capitalize">
                                        {router.asPath === "/" ? "Erectile Dysfunction" : breadcrumb.label}
                                    </span>
                                </div>
                            ))}

                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb