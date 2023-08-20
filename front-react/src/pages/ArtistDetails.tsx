import { ModalLayout } from "components";
import { useParams, useNavigate } from "react-router-dom";

export const ArtistDetails = () => {
    const { bikeId } = useParams();
    const navigate = useNavigate();

    const goBack_ = () => {
        navigate(-1);
    };

    return (
        <ModalLayout goBack={goBack_}>
            <div>Test</div>
        </ModalLayout>
    );
};
