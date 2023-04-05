import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Cal() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("floatingButton", { calLink: "rick/30min" });
            cal("ui", {
                styles: {
                    branding: { brandColor: "#19B395" },
                }
            });
        })();
    }, []);

}
