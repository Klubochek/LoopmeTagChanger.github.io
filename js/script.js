//blyadskie ""
let blyadskie_quote='"';

//FOR DCM RM/BANNERS TAGS
let DCM_string1="data-dcm-https-only";
let DCM_replace1="data-dcm-https-only\n    data-dcm-click-tracker='%%CLICK_TRACK_URL%%&lmhref='";
let DCM_string2="${";
let DCM_replace2="%%";
let DCM_string3="}";
let DCM_replace3="%%";
let DCM_string4="device-id=''";
let DCM_replace4="device-id='%%UDID%%'";
let DCM_string5="app-id=''";
let DCM_replace5="app-id='%%APPID%%'";
let DCM_string6="[APIFRAMEWORKS]";
let DCM_replace6="%%APIFRAMEWORKS%%";
let DCM_string7="[OMIDPARTNER]";
let DCM_replace7="%%OMIDPARTNER%%";
//FOR CeltraWithUR
let CeltraWithUR_string1="'clickUrl':''";
let CeltraWithUR_replace1="'clickUrl':'%%CLICK_TRACK_URL%%'";
//FOR CeltraWithoutURL
let CeltraWithoutURL_string1="'clickUrl':''";
let CeltraWithoutURL_replace1="'clickUrl':'%%CLICK_URL_UNESC%%'";
//FOR Sizmek
let Sizmek_string1="[timestamp]&ucm=true";
let Sizmek_replace1="{timestamp}&ucm=true&ncu=%%CLICK_TRACK_URL%%";
//FOR DoubleV
let DoubleV_string1="ssm=[SERVERSIDE]";
let DoubleV_replace1="ssm=0"; 
let DoubleV_string2="gdpr_consent=[GDPRCONSENT]";
let DoubleV_replace2="gdpr_consent=${ADDTL_CONSENT}";
let DoubleV_string3="abm=[APPBUNDLE]";
let DoubleV_replace3="aubndl={bundle_domain}";
let DoubleV_string4="pum=[PAGEURL]";
let DoubleV_replace4="turl={page_url}";
//FOR IAS
let IAS_string1="[BUNDLEID]";
let IAS_replace1="{bundle_domain}";
let IAS_string2="[ctv_appid]";
let IAS_replace2="";
//FOR Innovid
let Innovid_string1="[timestamp]";
let Innovid_replace1="{timestamp}";
let Innovid_string2="%%UDID%%";
let Innovid_replace2="{device_id}";
let Innovid_string3="%25APPID%25";
let Innovid_replace3="{app_key}";
//FOR AdForm
//let AdForm_replace1=;
//let AdForm_string2=;
//let AdForm_replace2=;

function replace_tag() {
    let text=document.querySelector("#textarea1").value;
    let tagtype=document.querySelector("#select_field").value;

    //deleting of quote from EXCEL!
    //text=text.replaceAll(blyadskie_quote,"");

    switch (tagtype)
    {
        case "DCM":
            text=text.replaceAll(DCM_string1,DCM_replace1);
            text = text.replaceAll(DCM_string2, DCM_replace2);
            text = text.replaceAll(DCM_string3,DCM_replace3);
            text = text.replaceAll(DCM_string4,DCM_replace4 );
            text = text.replaceAll(DCM_string5,DCM_replace5 );
            text = text.replaceAll(DCM_string6,DCM_replace6 );
            text = text.replaceAll(DCM_string7,DCM_replace7 );
            break;
        case "CeltraWithURL":
            text=text.replaceAll(CeltraWithUR_string1,CeltraWithUR_replace1);
            alert("CeltraWithURLD done");
            break;
        case "CeltraWithoutURL":
            text=text.replaceAll(CeltraWithoutURL_string1,CeltraWithoutURL_replace1);
            break;
        case "Sizmek":
            text=text.replaceAll(Sizmek_string1,Sizmek_replace1);
            break;
        case "DoubleV":
            text=text.replaceAll(DoubleV_string1,DoubleV_replace1);
            text=text.replaceAll(DoubleV_string2,DoubleV_replace2);
            text=text.replaceAll(DoubleV_string3,DoubleV_replace3);
            text=text.replaceAll(DoubleV_string4,DoubleV_replace4);
            break;
        case "IAS":
            text=text.replaceAll(IAS_string1,IAS_replace1);
            text=text.replaceAll(IAS_string2,IAS_replace2);
            break;
        case "Innovid":
            text=text.replaceAll(Innovid_string1,Innovid_replace1);
            text=text.replaceAll(Innovid_string2,Innovid_replace2);
            text=text.replaceAll(Innovid_string3,Innovid_replace3);
            break;

    }
    return document.querySelector("#textarea2").value=text;
  }
