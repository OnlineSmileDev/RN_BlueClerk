import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ToSContent() {
  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
      <Text style={styles.heading}>SOFTWARE LICENSE AGREEMENT</Text>
      <Text style={styles.para}>
        This is an Agreement for the license of computer program software between Norton
        Holdings, Inc., referred to in this Agreement as “Licensor,” and Licensee as
        provided below, referred to in this Agreement as “Licensee.” Licensor is a Texas
        corporation, located at 11782 Jollyville Road, Suite 210, Austin, Texas 78759.
        Licensor and Licensee are collectively referred to in this Agreement as the
        “Parties.”
      </Text>
      <Text style={styles.heading}>RECITAL </Text>
      <Text style={styles.para}>
        In consideration of the mutual promises made in this Agreement, Licensor and
        Licensee agree that the terms and conditions set forth as follows will apply to
        the license of the computer program software described in the Agreement.
      </Text>
      <Text style={styles.heading}>ARTICLE 1 LICENSE</Text>
      <Text style={styles.subheader}>GRANT Grant of License</Text>
      <Text style={styles.para}>
        1.01. Licensor grants and Licensee accepts a nontransferable license to use the
        Software described in Paragraph 1.02, subject to the conditions and for the period
        specified in this Agreement.
      </Text>
      <Text style={styles.subheader}>Subject Matter Software</Text>
      <Text style={styles.para}>
        1.02. The term “Software” as used in this Agreement consists of the following:
        Dasol Group software is defined as apparatus and associated methods relate to a
        tracking system that includes a tag having a unique code associated with a
        specific piece of equipment, where the system receives input from a user device
        indicating that the tag has been scanned by the user, logs the input in a
        database, and provides pertinent information to users and their designated agents.
      </Text>
      <Text style={styles.heading}>ARTICLE 2 LIMITATIONS ON USE</Text>
      <Text style={styles.subheader}>General Use of Software</Text>
      <Text style={styles.para}>
        2.01. Licensee agrees to use the software solely for its exclusive benefit for
        Licensee‘s internal purposes.
      </Text>
      <Text style={styles.subheader}>Copies</Text>
      <Text style={styles.para}>
        2.02. Licensee shall not copy, recreate, replicate, or otherwise use any portion
        of the Software in a manner not specifically outlined in this Agreement.
      </Text>
      <Text style={styles.subheader}>Licensee’s User Responsibilities</Text>
      <Text style={styles.para}>
        2.03. Licensee shall be exclusively responsible for the supervision, management,
        and control of its use of the Software, including, but not limited to: (a)
        Assuring proper configuration of the Designated Hardware, related equipment, and
        devices; and compatibility with the Software. (b) Establishing adequate operating
        methods. (c) Implementing procedures sufficient to satisfy its obligations for
        security under this Agreement, including appropriate control of its employees to
        prevent misuse, unauthorized copying, modification, or disclosure of the Software.
        (d) Ensuring that only one user per login provided uses the Software.
        Specifically, Licensee may not have a universal login that multiple employees may
        use unless otherwise agreed upon in writing by Licensor.
      </Text>
      <Text style={styles.subheader}>License Term</Text>
      <Text style={styles.para}>
        2.04. The license granted in this Agreement shall remain in force for the useful
        life of the Software unless terminated prior to that time as provided in this
        Agreement.
      </Text>
      <Text style={styles.heading}>ARTICLE 3 PROPERTY RIGHTS</Text>
      <Text style={styles.subheader}>Title to Software</Text>
      <Text style={styles.para}>
        3.01. Title to the Software is reserved for Licensor. Licensee acknowledges and
        agrees that Licensor is and shall remain the owner of the Software and shall be
        the owner of all copies of the Software made by Licensee.
      </Text>
      <Text style={styles.subheader}>Confidentiality of Software</Text>
      <Text style={styles.para}>
        3.02. Licensee acknowledges that the Software is confidential in nature and
        constitutes a trade secret belonging to Licensor. Licensee agrees to hold Software
        in confidence for Licensor and not to sell, rent, license, distribute, transfer,
        or disclose the Software or its contents, including methods or ideas used in the
        Software, to anyone except to employees of Licensee when disclosure to employees
        is necessary to use the license granted in this Agreement. Licensee shall instruct
        all employees to whom any such disclosure is made that the disclosure is
        confidential and that the employee must keep the Software confidential by using
        the same care and discretion that they use with other data designated by Licensee
        as confidential. The confidentiality requirements of this Paragraph 3.02 shall be
        in effect both during the term of this Agreement and after it is terminated.
      </Text>
      <Text style={styles.subheader}>Security</Text>
      <Text style={styles.para}>
        3.03. Licensee agrees to keep the Software in a secure place, under access and use
        restrictions designed to prevent disclosure of the Software to unauthorized
        persons. Licensee agrees to at least implement the security precautions that it
        normally uses to protect its own confidential materials and trade secrets.
        Licensee agrees to limit access to the Software to employees whose essential
        employment functions rely on use of the Software.
      </Text>
      <Text style={styles.subheader}>Disclosure as Breach</Text>
      <Text style={styles.para}>
        3.04. Licensee agrees that any disclosure of the Software to a third party
        constitutes a material breach of this Agreement and shall terminate the license
        granted by this Agreement. 3.05. Licensee agrees not to remove, mutilate, or
        destroy any copyright, patent notice, trademark, service mark, other proprietary
        markings, or confidential legends placed on or within the Software. 3.06. Licensee
        agrees not to modify, alter, amend, recalibrate, or recode the Software for any
        reason unless agreed upon in writing by Licensor.
      </Text>
      <Text style={styles.heading}>ARTICLE 4 PAYMENT</Text>
      <Text style={styles.subheader}>Periodic Payment</Text>
      <Text style={styles.para}>
        4.01. In payment for the license granted under this Agreement, Licensee shall pay
        Licensor an initial one-time fee of $5 per tag/band/or other NFC scannable device
        (“device”) provided to Licensee plus the monthly sum of $50 as a license fee. The
        initial one-time fee shall be payable immediately upon the request of the Licensee
        for device or devices. The initial license fee shall be payable on the first of
        the month following the execution of this Agreement. Succeeding monthly charges
        shall be payable from month to month in advance and will be collected via
        auto-payment.
      </Text>
      <Text style={styles.subheader}>Payment of Taxes</Text>
      <Text style={styles.para}>
        4.02. Licensee shall pay all taxes that may be assessed on the Software or its
        use, including personal property taxes, sales and use taxes, and excise taxes,
        excluding taxes based on the income of the Licensor.
      </Text>
      <Text style={styles.subheader}>License Fee Increases</Text>
      <Text style={styles.para}>
        4.03. Licensor may increase the periodic license fee provided for under this
        Article 4 on forty-five (45) days’ notice to Licensee. The increased license fee
        shall become effective on the date specified in the notice of the increase unless
        Licensee terminates this Agreement by thirty (30) days’ notice to Licensor and
        returns the Software to Licensor on or before the date on which the increased fee
        would otherwise go into effect.
      </Text>
      <Text style={styles.heading}>ARTICLE 5 INSTALLATION AND SERVICE</Text>
      <Text style={styles.subheader}>Delivery of Software</Text>
      <Text style={styles.para}>
        5.01. Licensor shall make a copy of the Software available to Licensee upon
        execution of this Agreement in a manner acceptable to both parties.
      </Text>
      <Text style={styles.subheader}>Testing</Text>
      <Text style={styles.para}>
        5.02. Licensor shall conduct tests of the Software after it has been installed.
        All testing shall be conducted in accordance with specifications for testing the
        Software that have been published by Licensor, using data provided by Licensee,
        for a period of seven (7) days. All testing shall be performed on the Designated
        Hardware.
      </Text>
      <Text style={styles.subheader}>Acceptance</Text>
      <Text style={styles.para}>
        5.03. The Software shall be deemed to have been accepted by Licensee when after
        completion of the testing prescribed by Paragraph 5.03 and productive use of the
        Software by Licensee. If the Software is deemed unacceptable, Licensee shall
        return the Software without change with a report detailing the reasons for its
        unacceptability.
      </Text>
      <Text style={styles.subheader}>Training</Text>
      <Text style={styles.para}>
        5.04. Licensor shall provide seven (7) days of technical orientation and training
        for all of Licensee‘s computer operations employees at no charge. Training and
        orientation shall be provided at Licensee’s place of business.
      </Text>
      <Text style={styles.subheader}>Technical Support</Text>
      <Text style={styles.para}>
        5.05. Licensor shall provide additional technical support services to Licensee on
        request and as available through Zendesk or any other resource that Licensor may
        deem appropriate. Licensor shall make reasonable efforts to keep Licensee updated
        on available support resources.
      </Text>
      <Text style={styles.heading}>ARTICLE 6 WARRANTY PROVISIONS</Text>
      <Text style={styles.subheader}>Warranty of Title</Text>
      <Text style={styles.para}>
        6.01. Licensor warrants that it has good title to the Software and the right to
        license its use to Licensee free of any proprietary rights, liens, or encumbrances
        of any other party.
      </Text>
      <Text style={styles.subheader}>Warranty of Title Remedies</Text>
      <Text style={styles.para}>
        6.02. (a) Licensee shall notify Licensor of the assertion of any claim that the
        Software or Licensee ‘s use of the Software under this Agreement violates the
        trade secret, trademark, copyright, patent, or other proprietary right of any
        other party, and shall cooperate with Licensor in the investigation and resolution
        of any such claim. (b) If the Software becomes, or is likely to become, the
        subject of a claim of infringement of a copyright or patent, Licensor may procure
        for Licensee the right to continue using the Software, may replace or modify the
        Software to render it non-infringing, or may require that Licensee discontinue its
        use. (c) Licensor shall have no liability for any claim of copyright or patent
        infringement based on the use of an original version of the Software if
        infringement would have been avoided by the use of an updated version made
        available to Licensee. (d) Licensor shall not indemnify Licensee against any claim
        or liability based on Licensee‘s modification or conversion of the Software and/or
        the subsequent use of that modification or conversion or use of the Software in
        combination with programs or data not supplied by Licensor if infringement would
        have been avoided by not using or combining the Software with other programs or
        data.
      </Text>
      <Text style={styles.subheader}>Warranty of Conformity to Specifications</Text>
      <Text style={styles.para}>
        6.03. Licensor warrants that the Software shall substantially conform to
        Licensor’s published functional specifications when shipped to Licensee. ANY
        MODIFICATION OF THE SOFTWARE BY ANY PERSONS OTHER THAN LICENSOR SHALL VOID THIS
        WARRANTY.
      </Text>
      <Text style={styles.subheader}>Remedy for Nonconforming Software</Text>
      <Text style={styles.para}>
        6.04. During a period of thirty (30) days after acceptance of the Software by
        Licensee, Licensor shall at its own expense provide programming services to
        correct Software defects, errors, or malfunctions that cause the Software to fail
        to operate in substantial conformance to Licensor’s published functional
        specifications. The Licensor shall perform such services only in the event
        Licensee has notified Licensor of any such failure to perform. However, LICENSOR
        DOES NOT GUARANTEE SERVICE RESULTS OR REPRESENT OR WARRANT THAT ALL ERRORS WILL BE
        CORRECTED. LICENSEE AGREES THAT LICENSEE‘S SOLE AND EXCLUSIVE REMEDY FOR THE
        DEFECTS DESCRIBED IN THIS PARAGRAPH 6.04 SHALL BE LIMITED TO THE CORRECTIVE ACTION
        DESCRIBED IN THIS PARAGRAPH.
      </Text>
      <Text style={styles.subheader}>Warranty Disclaimer</Text>
      <Text style={styles.para}>
        6.05. THE EXPRESS WARRANTIES SET FORTH IN THIS AGREEMENT ARE IN LIEU OF ALL OTHER
        WARRANTIES EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES OF
        MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
      </Text>
      <Text style={styles.subheader}>Limitation of Remedies</Text>
      <Text style={styles.para}>
        6.06. LICENSEE AGREES THAT ITS EXCLUSIVE REMEDIES, AND LICENSOR’S ENTIRE LIABILITY
        WITH RESPECT TO THE SOFTWARE IS AS SET FORTH IN THIS AGREEMENT. LICENSEE FURTHER
        AGREES THAT LICENSOR SHALL NOT BE LIABLE TO LICENSEE FOR ANY DAMAGES, INCLUDING
        ANY LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARIS-
        ING OUT OF ITS USE OR INABILITY TO USE THE SOFTWARE OR THE BREACH OF ANY EXPRESS
        OR IMPLIED WARRANTY.
      </Text>
      <Text style={styles.heading}>ARTICLE 7 TERMINATION</Text>
      <Text style={styles.subheader}>Cause for Termination</Text>
      <Text style={styles.para}>
        7.01. The license granted in this Agreement shall be terminated automatically and
        without further notice upon the occurrence of any of the following events: (a)
        Expiration of the term specified in Paragraph 2.04 or of any optional renewal term
        in the absence of a subsequent renewal in accordance with the terms of this
        Agreement. (b) Refusal by Licensee to pay any periodic license fee or any increase
        in license fee provided for in this Agreement. (c) Cessation of business by
        Licensee or Licensor. (d) Commission by Licensee of an event of default as defined
        in Paragraph 7.02.
      </Text>
      <Text style={styles.subheader}>Events of Default</Text>
      <Text style={styles.para}>
        7.02. Licensee commits an event of default, and this Agreement and the license
        granted under this Agreement shall terminate, if any of the following occur: (a)
        Licensee attempts to use, copy, license, or convey the Software in any manner
        contrary to the terms of this Agreement or in derogation of Licensor’s proprietary
        rights in the Software. (b) Licensee fails or neglects to perform or observe any
        of its existing or future obligations under this Agreement, including, without
        limitation, the timely payment of any sums due Licensor within fifteen (15) days
        after notice that the payment is delinquent. (c) Licensee makes an assignment of
        Licensee‘s business for the benefit of creditors. (d) A petition in bankruptcy is
        filed by or against Licensee. (e) A receiver, trustee in bankruptcy, or similar
        officer is appointed to take control of all or part of Licensee‘s property. (f)
        Licensee is adjudicated a bankrupt.
      </Text>
      <Text style={styles.subheader}>Effect of Termination</Text>
      <Text style={styles.para}>
        7.03. Licensee agrees that immediately on termination under Paragraph 7.01, it
        shall immediately certify to Licensee that it has retained no copies of the
        Software, and acknowledge that it may no longer use the Software. Licensee further
        agrees that in the event of termination through its default, all fees or charges
        due for the remaining term of this Agreement shall immediately become due and
        payable. Upon termination of the license, Licensor’s obligations under this
        Agreement shall cease.
      </Text>
      <Text style={styles.heading}>ARTICLE 8 GENERAL PROVISIONS</Text>
      <Text style={styles.subheader}>Assignment</Text>
      <Text style={styles.para}>
        8.01. Licensee shall not assign or otherwise transfer its rights under this
        Agreement, including the license granted in this Agreement, or the Software
        obtained pursuant to this Agreement without the prior written consent of Licensor.
        Any attempt to make such an assignment without Licensor’s consent shall be void.
      </Text>
      <Text style={styles.subheader}>Governing Law</Text>
      <Text style={styles.para}>
        8.02. The Parties acknowledge that this Agreement has been made in Texas and agree
        that it shall be construed pursuant to the laws of the State of Texas. Parties
        hereby agree that any action arising out of this Agreement will be brought solely
        in any state court located in Travis County, Texas.
      </Text>
      <Text style={styles.subheader}>Integration</Text>
      <Text style={styles.para}>
        8.03. The Parties acknowledge and agree that this Agreement is the complete and
        exclusive statement of the mutual understanding of the Parties and that it
        supersedes and cancels all previous written and oral agreements and communications
        relating to the license that is the subject matter of this Agreement.
      </Text>
      <Text style={styles.subheader}>Notices</Text>
      <Text style={styles.para}>
        8.04. Any notice required or permitted by this Agreement to be given to either
        party shall be deemed to have been given if in writing and delivered certified
        mail, postage prepaid and addressed: (a) When intended for Licensee, to the
        address provided by Licensee upon enrollment in Software; or (b) When intended for
        Licensor, to 11782 Jollyville Road, Suite 210, Austin, Texas 78759.
      </Text>
      <Text style={styles.subheader}>Attorney’s Fees</Text>
      <Text style={styles.para}>
        8.05. If any legal proceeding is necessary to enforce the terms of this Agreement,
        the prevailing party shall be entitled to reasonable attorney’s fees in addition
        to any other relief to which that party may be entitled.
      </Text>
      <Text style={styles.subheader}>Severability</Text>
      <Text style={styles.para}>
        8.06. If any part of this Agreement is declared to be invalid by any court of
        competent jurisdiction, that part of the Agreement shall be severed from this
        Agreement and the remainder of this Agreement shall remain in full force and
        effect.
      </Text>
      <Text style={styles.subheader}>Nonwaiver</Text>
      <Text style={styles.para}>
        8.07. The Parties agree that a waiver of a breach or default under this Agreement
        shall not constitute a waiver of any subsequent breach or default. The Parties
        also agree that no failure to exercise or delay in exercising any right under this
        Agreement on the part of either party shall operate as a waiver of the right.
      </Text>
      <Text style={styles.subheader}>Amendments</Text>
      <Text style={styles.para}>
        8.08. This Agreement shall be modified only by a written agreement executed by
        persons authorized to execute agreements on behalf of the Parties.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  contentWrapper: {
    padding: 8,
  },
  heading: {
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'SlateForOnePlus-Regular',
    textAlign: 'center',
  },
  subheader: {
    marginVertical: 5,
    fontSize: 15,
    fontFamily: 'SlateForOnePlus-Regular',
  },
  para: {
    color: 'gray',
    fontSize: 12,
    fontFamily: 'SlateForOnePlus-Regular',
  },
});
