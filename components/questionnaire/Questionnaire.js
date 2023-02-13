import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ProgressBar from './ProgressBar';
import Introduction from './Introduction';
import SexualImprovement from './SexualImprovement';
import VitalTested from './VitalTested';
import VitalTestedMedPractitioner from './VitalTestedMedPractitioner';
import Allergies from './Allergies';
import PrescriptionMedications from './PrescriptionMedications';
import ErectileDysfunction from './ErectileDysfunction';
import MedicalProblems from './MedicalProblems';
import HeartAttack from './HeartAttack';
import HeartCondition from './HeartCondition';
import NitratesList from './NitratesList';
import RecreationalDrugs from './RecreationalDrugs';
import MedicalIssues from './MedicalIssues';
import { useRouter } from 'next/router';
import axios from "axios";
import Router from 'next/router';

const Questionnaire = () => {

    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({ mode: 'onChange' });
    const nextStep = () => {
        if (isValid) {
            setStep(step + 1);
        }
    }
    const prevStep = () => setStep(step - 1);
    const router = useRouter();

    // function handleInputChange(e) {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]:
    //             e.target.type === 'checkbox'
    //                 ? e.target.checked
    //                 : e.target.value
    //     });

    //     if (e.target.name == "erectiledysfunction") {
    //         if (e.target.value == "Yes") {
    //             setCurrentlyED(true);
    //         }
    //         else {
    //             setCurrentlyED(false);
    //         }
    //     }
    //     if (e.target.name == "cardiaccondition") {
    //         if (e.target.value == "Yes") {
    //             setCardicCondition(true);
    //         }
    //         else {
    //             setCardicCondition(false);
    //         }
    //     }

    // }


    const onSubmit = data => {
        console.log(data);
        data['token'] = localStorage.getItem("user_token");
        axios
            .post(process.env.BASE_URL + "/user/user_answer", data)
            .then((responce) => {
                console.log(responce.data);
                if(responce.data.code == 200){
                    var user_data = JSON.parse(responce.data.data.answers);
                   
                    var existing = localStorage.getItem("user_obj");
                    // var user = JSON.parse(localStorage.getItem('dummy_user'));
                    existing = existing ? JSON.parse(existing) : {};
                    existing["first_name"] = user_data.firstname;
                    existing["last_name"] = user_data.lastname;
                    localStorage.setItem("user_obj", JSON.stringify(existing));
                    const {pathname} = Router;
                    Router.push('/recommendations')
                }
                
            })
            .catch((error) => {
                console.log(error);
                
            });
        // if (data && isValid) {
        //     router.push('recommendations');
        // }
    };

    return (
        <div className='bg-white bg-[url("/images/questionnairbg.jpg")] bg-no-repeat bg-center bg-cover pt-12 pb-28 md:pb-52 min-h-[calc(100vh_-_150px)]'>
            <div className="mx-auto px-4 sm:px-0 sm:max-w-[540px]">
                <ProgressBar step={step} percentage={(step / 13) * 100} />

                <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>

                    {step === 1 && (
                        <Introduction
                            register={register}
                            errors={errors}
                            nextStep={nextStep} />
                    )}
                    {step === 2 && (
                        <SexualImprovement
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}

                    {step === 3 && (
                        <VitalTested
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep} />
                    )}

                    {step === 4 && (
                        <VitalTestedMedPractitioner
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 5 && (
                        <Allergies
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 6 && (
                        <PrescriptionMedications
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 7 && (
                        <ErectileDysfunction
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 8 && (
                        <MedicalProblems
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 9 && (
                        <HeartAttack
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 10 && (
                        <HeartCondition
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 11 && (
                        <NitratesList
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 12 && (
                        <RecreationalDrugs
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 13 && (
                        <MedicalIssues
                            register={register}
                            errors={errors}
                            prevStep={prevStep}
                        />
                    )}

                </form>
            </div>
        </div>
    )
}

export default Questionnaire