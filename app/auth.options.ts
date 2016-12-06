export const options = {
  allowedConnections: ['Username-Password-Authentication'],
  theme: {
    logo: 'https://extranet.acsysweb.com/vsitemanager/Acsys/public/Upload/Primacy_2_0/images/content_images/icons/primacy_emergingtech_IndoorMapping_icon_260x260.png'
  },
  additionalSignUpFields: [{
    name: "address",
    placeholder: "enter your address",
    // The following properties are optional
    icon: "https://example.com/assests/address_icon.png",
    prefill: "street 123",
    validator: function(address:any) {
      return {
         valid: address.length >= 10,
         hint: "Must have 10 or more chars" // optional
      };
    }
  },
  {
    name: "full_name",
    placeholder: "Enter your full name"
  }],
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "Log me in"
  },
}
