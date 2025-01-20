const SignedXml = require('xml-crypto').SignedXml;

function xmlSigner(xml, api, signatureLocation, signingKey) {
    try{
        let sig = new SignedXml();
        sig.addReference("//*[local-name(.)='"+api+"']", ['http://www.w3.org/2000/09/xmldsig#enveloped-signature','http://www.w3.org/2001/10/xml-exc-c14n#'],'http://www.w3.org/2001/04/xmlenc#sha256', null, null, null, true);
        sig.signingKey = signingKey;
        sig.canonicalizationAlgorithm = 'http://www.w3.org/2001/10/xml-exc-c14n#';
        sig.signatureAlgorithm = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256';
        sig.computeSignature(xml, {
            location: {reference: "//*[local-name(.)='"+signatureLocation+"']",action:"after"}
        });
        sig.computeSignature(xml);
        return sig.getSignedXml();

    } catch (error) {
        console.error(error)
    }
}

module.exports = {xmlSigner} 