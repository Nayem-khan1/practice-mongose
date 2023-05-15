interface IFakeInfo{
    id: string;
    role: "Job Holder";
    password: string;
    name:{
        firstName: string;
        middleName?: string;
        lastName:string;
    }
    gender: "male" | "female";
    datOfBirth?: string;
    email:string;
    contactNo:string;
    emergencyContactNo:string;
    presentAddress:string;
    permanentAddress: string;
}