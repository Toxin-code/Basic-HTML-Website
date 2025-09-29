import {Description} from "@/components/ui/description";
import {Review} from "@/components/ui/review-block/review.tsx";

export const AboutFooter = () => {
    return (
        <>
            <div style={{padding: "20px"}}>
                <Description titleFontSize="24px" title="Reviews from my Teachers"/>
            </div>
            <div style={{paddingLeft: "40px", display: "flex"}}>
                <Review description="Uladzislau was a brilliant\n student; always stood out\n with his assigments."
                        username="GodHunt"
                        profession="QA Enginer"/>

                <Review description="Uladzislau was a brilliant\n student; always stood out\n with his assigments."
                        username="GodHunt"
                        profession="QA Enginer"/>

                <Review description="Uladzislau was a brilliant\n student; always stood out\n with his assigments."
                        username="GodHunt"
                        profession="QA Enginer"/>
            </div>

            <div style={{justifyContent: "center", display: "flex", marginTop: "100px", marginBottom: "30px"}}>
                <Description titleFontSize="24px" title="© all rights reserved 2025"/>
            </div>
        </>
    )
}