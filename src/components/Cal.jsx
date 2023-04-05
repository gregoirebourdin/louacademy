import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Cal() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("floatingButton", { calLink: "/lou-academy/30min", buttonText: "Je me lance !", buttonColor: "#119079", buttonTextColor: "#FFFFFF", hideButtonIcon: true });
            cal("ui", {
                branding: { brandColor: "#000000" },
                styles: {
                    branding: { brandColor: "#000000" },
                }
            });
        })();
    }, []);

}
