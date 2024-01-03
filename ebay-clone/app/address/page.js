"use client"

// import {AiOutlineLoading} from "react-icons/ai";
import MainLayout from "@/app/layouts/MainLayout";
import TextInput from "@/app/components/TextInput";

export default function Address() {

    // const supabase = createClientComponentClient()

    return (
        <>
            <MainLayout>
                <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
                    <div className="mx-auto bg-white rounded-lg p-3">
                        <div className="text-xl text-bold mb-2">Address Details</div>
                        <form>
                            <div className="mb-4">
                                <TextInput
                                    className="w-full"
                                    string={'TEST'}
                                    placeholder="Name"
                                    error="This is an error"
                                />
                                <button
                                    className="
                                        mt-6
                                        w-full
                                        text-white
                                        text-lg
                                        font-semibold
                                        p-3
                                        rounded
                                        bg-blue-600
                                    "
                                >
                                    Update Address
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}