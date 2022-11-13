import React from "react";
import styled from "styled-components";
import Image from "next/image";
import siwesLogo1 from "../public/siwesLogo1.jpg";

const HomeContent = () => {
  return (
    <Container>
      <ImageDiv>
        <Image
          src={siwesLogo1}
          height={200}
          alt="siwesLogo"
          objectFit="cover"
          layout="responsive"
        />
      </ImageDiv>
      <Wrapper>
        <p>
          The Students Industrial Work Experience Scheme (SIWES) is a Skills
          Training Programme designed to prepare and expose Students of
          Universities, Polytechnics, Colleges of Technology, Colleges of
          Agriculture and Colleges of Education for the Industrial Work
          situation they are likely to meet after graduation. The Scheme affords
          Students the opportunity of familiarizing and exposing themselves to
          handling equipment and machinery that are usually not available in
          their Institutions. Before the establishment of the Scheme, there was
          a growing concern that graduates of our Institutions of higher
          learning lacked adequate practical knowledge and that the theoretical
          education in Higher Institutions was not responsive to the needs of
          the Employers’ of Labour. It is against this background that the
          Industrial Training Fund (ITF) initiated, designed and introduced
          SIWES Scheme in 1973 to acquaint Students with the skills of handling
          Industrial equipment and machinery. The Industrial Training Fund (ITF)
          solely funded the Scheme during its formative years. However, due to
          financial constraints, the Fund withdrew from the Scheme in 1978. The
          Federal Government noting the significance of the skills training,
          handed the management of the Scheme to the National Universities
          Commission (NUC) and the National Board for Technical Education (NBTE)
          in 1979. In November, 1984 management and implementation of the Scheme
          was again reverted to the ITF with the funding to be solely borne by
          the Federal Government.
        </p>
        <h3>OBJECTIVES OF SIWES</h3>
        <p>
          Specifically, the objectives of the Students Industrial Work
          Experience Scheme (SIWES) are to: Provide avenue for Students in
          Institutions of higher Learning to acquire industrial skills and
          experience in their course of study. Prepare Students for the
          industrial work situation they are to meet after graduation. Expose
          Students to work methods and techniques in handling equipment and
          machinery that may not be available in their Institutions. Make the
          transition from school to the world of work easier, and enhance
          Students contacts for later job placement. Provide Students with an
          opportunity to apply their knowledge in real work situation thereby
          bridging the gap between theory and practice. Enlist and strengthen
          Employers involvement in the entire educational process and prepare
          Students for employment after graduation.
        </p>
        <h6>
          BODIES INVOLVED IN THE MANAGEMENT OF SIWES PROGRAMME AND THEIR ROLES
        </h6>
        <p>
          The Federal Government of Ni <br />
          1. The Industrial Training Fund (ITF),
          <br />
          2. National Universities Commission (NUC), <br />
          3. National Board for Technical Education (NBTE), <br />
          4. National Commission for Colleges of Education (NCCE), <br />
          5. Institutions of Higher Learning; <br />
          6. The Employers of Labour
        </p>
        <p>
          The bodies have specific roles assigned to them in the administration
          and management of SIWES
        </p>
        <h1>FEDERAL GOVERNMENT OF NIGERIA</h1>
        <ol>
          <li>
            Provide adequate funds to the Industrial Training Fund through the
            Federal Ministry of Industry, Trade &amp; Investment for the Scheme.
          </li>
          <li>
            Make it mandatory for all Ministries, Companies and Parastatals to
            offer places for the attachment of Students in accordance with the
            provisions of Decree No. 47 of 1971 as amended in 2011. The relevant
            provisions of the amended act are as follows:
            <ul>
              <h3>Section 7A (1) (b) stipulates as follows:</h3>
              <li>
                Shall Accept Students for Industrial Attachment Purposes <br />
                The Decree under section 7A (2) stipulate penalties in default
                of section 7A (1)(b).
              </li>
              <li>
                Section 7A (2) <br />
                “Any employer who is in breach of the provision of the
                sub-section (1) of this section shall be guilty of an offence
                under this Act and liable to conviction:
              </li>
              <li>
                In the case of a corporate body, to a fine of Five Hundred
                Thousand Naira (N500,000.00) for the first breach and One
                Million Naira (N1,000,000.00) for subsequent breach; and
              </li>
              <li>
                In the case of Chief Executive, Secretary, or other Principal
                Officers of the company, to a fine of Fifty Thousand
                Naira(N50,000.00)or two years imprisonment for the first breach
                and three years’ imprisonment without option of a fine for each
                subsequent breach.
              </li>
            </ul>
          </li>
        </ol>
        <h6>THE INDUSTRIAL TRAINING FUND</h6>
        <ol>
          <li>
            Formulate policies and guidelines on SIWES for distribution to all
            SIWES participating bodies, institutions and companies involved in
            the Scheme;
          </li>
          <li>
            Regularly involve in organizing orientation programmes for Students
            prior to their attachment;
          </li>
          <li>
            Receive and process Master and Placement Lists from the Institutions
            through their Supervisory Agencies (NUC,NBTE &amp; NCCE);
          </li>
          <li> Supervise and Monitor Students on Industrial Attachment; </li>
          <li> Disburse Supervisory and Students allowances by e-payment. </li>
          <li>
            Organize Biennial SIWES National Conference and SIWES Review
            Meetings;
          </li>
          <li> Provide insurance cover for Students on attachment; </li>
          <li>
            Provide logistics and materials necessary for effective
            administration of the Scheme.
          </li>
          <li>
            Ensure the visitation (tours) of ITF Officers to the Supervising
            Agencies, Institutions, Employers and Students on Attachment;
          </li>
          <li>
            Provide information on companies for attachment and assist in the
            industrial placement of students;
          </li>
          <li>
            Continuously review and carry out research into the operation of the
            Scheme;
          </li>
          <li> Vet, process and verify Students’ logbooks and ITF Form 8. </li>
        </ol>
      </Wrapper>
    </Container>
  );
};

export default HomeContent;

const Container = styled.div`
  background-color: smoke;
`;
const ImageDiv = styled.div`
  overflow: hidden;
  width: 100%;
`;
const Wrapper = styled.div`
  background-color: smoke;
  padding: 20px;
  font-size: 12px;
  line-height: 20px;
`;
