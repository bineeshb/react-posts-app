import { useState } from "react";

const Pagination = (props) => {
    const [page, setPage] = useState(1);
    const { itemsCount, sentiment, size } = props;
    const pageSize = props.pageSize;
    const pages = [];
    const last = Math.ceil(itemsCount / pageSize);

    for (let i = 1; i <= last; i++) {
        pages.push(i);
    }

    const pages_count = pages.length;

    const selectPageHandler = (currPage) => {
        if (currPage >= 1 && currPage <= last && currPage !== page) {
            console.log(currPage);
            setPage(currPage);
            props.page(currPage);
        }
    };

    let prev = (
        <span
            className={`mx-2 ${page === 1 ? "opacity-20" : "cursor-pointer"}`}
            onClick={() => {
                selectPageHandler(page - 1);
            }}
        >
            Prev
        </span>
    );
    let next = (
        <span
            className={`mx-2 ${
                page === last ? "opacity-20" : "cursor-pointer"
            }`}
            onClick={() => {
                selectPageHandler(page + 1);
            }}
        >
            Next
        </span>
    );

    let first_element;
    let last_element;
    let indices;
    let ellipses_start;
    let ellipses_end;

    if (pages_count <= 8) {
        indices = pages.map((i) => {
            return (
                <span
                    className={`mx-2 ${
                        page === i
                            ? "underline border border-solid"
                            : "cursor-pointer"
                    }`}
                    onClick={() => {
                        selectPageHandler(i);
                    }}
                    key={i}
                >
                    {i}
                </span>
            );
        });
    } else if (pages_count > 8) {
        if (page <= 3) {
            indices = pages.slice(0, 4).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
            ellipses_end = <span>...</span>;

            last_element = pages.slice(last - 1, last).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
        } else if (page >= 4 && page < last - 4) {
            first_element = pages.slice(0, 1).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
            ellipses_start = <span>...</span>;
            indices = pages.slice(page - 2, page + 1).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
            ellipses_end = <span>...</span>;
            last_element = pages.slice(last - 1, last).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
        } else if (page >= last - 4 && page <= last) {
            first_element = pages.slice(0, 1).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
            ellipses_start = <span>...</span>;
            indices = pages.slice(last - 5, last).map((i) => {
                return (
                    <span
                        className={`mx-2 ${
                            page === i
                                ? "underline border border-solid"
                                : "cursor-pointer"
                        }`}
                        onClick={() => {
                            selectPageHandler(i);
                        }}
                        key={i}
                    >
                        {i}
                    </span>
                );
            });
        }
    }

    const classes = {
        // sentiments
        neutral: "text-gray-700",
        success: "text-sky-700",
        info: "text-purple-700",
        danger: "text-red-700",

        // size
        small: "text-xs",
        medium: "text-base",
        large: "text-lg",
    };

    return (
        <div
            className={`flex justify-center my-2 mx-2 
            ${classes[sentiment ? sentiment : "neutral"]}
            ${classes[size ? size : "base"]}`}
        >
            <div>
                {
                    <div>
                        {" "}
                        ({page * 10 - 10 + 1} - {page * 10} of {itemsCount})
                    </div>
                }
            </div>
            <div className="justify-self-end">
                {[
                    prev,
                    first_element,
                    ellipses_start,
                    indices,
                    ellipses_end,
                    last_element,
                    next,
                ]}
            </div>
        </div>
    );
};

export default Pagination;
