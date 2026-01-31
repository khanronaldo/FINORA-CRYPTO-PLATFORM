const injectStyles = () => {
        const e = document.querySelector("style[fs-components-cloak]");
        e ? .remove();
        const t = document.createElement("style");
        t.setAttribute("fs-components-cloak", "cloak"), t.textContent = '\n     [fs-marquee-instance],[fs-cnumbercount-instance]{ opacity: 0; }\n    [fs-consent-element="internal-component"],[fs-consent-element="banner"],[fs-consent-element="fixed-preferences"],[fs-consent-element="preferences"],[fs-consent-element="interaction"]{display:none}\n ', document.head.appendChild(t)
    },
    initFsComponents = async e => {
        injectStyles();
        const t = window ? .finsweetComponentsConfigLoading,
            n = document ? .querySelector("script[fs-components-src]");
        if (void 0 !==
            import.meta && !n && !t) {
            document ? .querySelector('script[finsweet="components"][async][type="module"]');
            const t = await
            import (
                import.meta.url), n = Object.keys(t) || [];
            return new Promise((t, s) => {
                const o = document.createElement("script"),
                    a = e + "?v=" + (new Date).getTime();
                o.src = a, o.type = "module", o.async = !0, o.setAttribute("fs-components-src",
                    import.meta.url), o.setAttribute("fs-components-installed", n ? .join(",")), o.onload = () => t(), o.onerror = () => s(new Error("Failed to load script")), document.head.appendChild(o)
            })
        }
    };
initFsComponents("https://cdn.jsdelivr.net/npm/@finsweet/fs-components@2/fs-components.js");
export const table = {
    instances: {
        "fs-table": {
            dataSource: "file",
            rows: 4,
            columns: 7,
            showCaption: "false",
            showHeader: "true",
            showFooter: "false",
            isEditable: "true",
            captionId: "",
            instance: "fs-table",
            fscomponentinstance: "fs-table",
            fscomponentclass: "fs-table",
            fscomponentname: "Table",
            content: {},
            headers: [],
            data: [],
            headerIds: [],
            fscomponentlastupdate: "November 17, 2025, 10:13AM"
        },
        "fs-table-1": {
            dataSource: "file",
            rows: 5,
            columns: 3,
            showCaption: "false",
            showHeader: "true",
            showFooter: "false",
            isEditable: "true",
            captionId: "",
            instance: "fs-table-1",
            fscomponentinstance: "fs-table-1",
            fscomponentclass: "fs-table-1",
            fscomponentname: "Table 1",
            content: {},
            headers: [],
            data: [],
            headerIds: [],
            fscomponentlastupdate: "January 7, 2026, 10:58PM"
        }
    }
};