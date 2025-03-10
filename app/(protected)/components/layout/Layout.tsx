"use client";

// * components
import Header from "./Header";
import Left from "./Left";
import Contents from "./Contents";
import DivideGroup from "../divides/DivideGroup";
import DividePanel from "../divides/DividePanel";

const Layout = ({ children }: any) => {
    return (
        <div className='h-screen'>
            <Header />

            <div className='h-[calc(100%-44px)] p-4'>
                <DivideGroup className=''>
                    <DividePanel>
                        <Left />
                    </DividePanel>

                    <DividePanel className='w-full'>
                        <Contents>{children}</Contents>
                    </DividePanel>
                </DivideGroup>
            </div>
        </div>
    );
};

export default Layout;
