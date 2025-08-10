export type GenerateImageState = {
   imageUrl?:string;
   error?:string;
   status:"idle" | "error" | "success" ;
   keyword?:string;
};

export type RemoveBackgroundState = {
   error?:string;
   status:"idle" | "error" | "success" ;
   originalImage?:string;
   processedImage?:string;
};

export type StripeState = {
   status:"idle" | "success" | "error";
   error:string;
   redirectUrl?:string;
};