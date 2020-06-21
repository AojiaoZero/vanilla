/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import * as React from "react";
import { storyWithConfig } from "@library/storybook/StoryContext";
import {ISearchSort, ISearchSortAndPaginationInfo, SortAndPaginationInfo} from "@library/search/SortAndPaginationInfo";
import { StoryParagraph } from "@library/storybook/StoryParagraph";
import {t} from "@vanilla/i18n/src";

interface IProps extends ISearchSortAndPaginationInfo {
    message?: string;
}

export default {
    title: "Search/MiscellaneousComponents",
};


export const dummySortData: ISearchSort = {
    options: [{
        value: "",
        name: t("Last Updated"),
    },{
        value: "",
        name: t("Date Created"),
    },{
        value: "",
        name: t("Last Commented"),
    }],
}

export const dummyPaginationData = {
    resultStart: 31,
    resultEnd: 60,
    total: 66,
};

function SearchMiscellaneousComponents(props: IProps) {
    const { sort = dummySortData, paginationInfo = dummyPaginationData, message} = props;
    return (
        <>
            {message && <StoryParagraph>{message}</StoryParagraph>}
            <SortAndPaginationInfo sort={sort} paginationInfo={paginationInfo} />
        </>
    );
}

export const NoSort = storyWithConfig({}, () => <SearchMiscellaneousComponents sort={[]} message={"No sort, only pagination info"}/>);
export const NoPaginationInfo = storyWithConfig({}, () => <SearchMiscellaneousComponents paginationInfo={[]} message={"No pagination info, only sort"} />);
export const NoRender = storyWithConfig({}, () => <SearchMiscellaneousComponents message={"Does not render, no data"} paginationInfo={[]} sort={[]} />);
export const BigTotal = storyWithConfig({}, () => <SearchMiscellaneousComponents message={"Big total"} paginationInfo={{...dummyPaginationData, total: 9595959595}} sort={dummySortData} />);
