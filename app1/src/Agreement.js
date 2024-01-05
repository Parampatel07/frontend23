import React from "react";
class Agreement extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            isAgree: false
        }
    }
    handleEvent = (event) => {
        if(event.target.value === '1')
        {
            this.setState({
                isAgree:true
            });
        }
        else 
        {
            this.setState({
                isAgree:false
            });
        }
    }
    render() {
        return (<div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">SOFTWARE LICENSE AGREEMENT</h1>
                    <p>This Software License Agreement ("Agreement") is entered into as of [Effective Date], by and between [Licensor Name], a [State/Country of Incorporation] corporation, with its principal place of business at [Licensor Address] ("Licensor"), and [Licensee Name], a [State/Country of Incorporation] corporation, with its principal place of business at [Licensee Address] ("Licensee").</p>
                    <p>**NOW, THEREFORE, in consideration of the mutual covenants contained herein, the parties agree as follows:</p>

                    <h2>1. GRANT OF LICENSE:</h2>

                    <p>1.1 <strong>License Grant.</strong> Subject to the terms and conditions of this Agreement, Licensor hereby grants Licensee a non-exclusive, non-transferable license to use the Software for its internal accounting purposes only.</p>

                    <p>1.2 <strong>Scope of Use.</strong> Licensee may install and use the Software on [Number of Authorized Devices] authorized devices. Licensee shall not use the Software on more devices than the number of authorized devices without obtaining additional licenses from Licensor.</p>

                    <p>1.3 <strong>Restrictions.</strong> Licensee shall not (a) copy, reproduce, modify, or create derivative works of the Software; (b) reverse engineer, decompile, disassemble, or attempt to discover the source code of the Software; (c) rent, lease, or sublicense the Software; (d) transfer the Software or any rights granted under this Agreement; or (e) remove or alter any proprietary notices on the Software.</p>

                    <h2>2. FEES:</h2>

                    <p>2.1 <strong>License Fee.</strong> In consideration for the license granted herein, Licensee shall pay Licensor the license fee as specified in Exhibit A attached hereto.</p>

                    <p>2.2 <strong>Payment Terms.</strong> The license fee shall be payable [Specify Payment Terms, e.g., upon execution of this Agreement, annually in advance, etc.].</p>

                    <h2>3. TERM AND TERMINATION:</h2>

                    <p>3.1 <strong>Term.</strong> This Agreement shall commence on the Effective Date and continue for [Specify Term, e.g., one (1) year] unless earlier terminated as provided herein.</p>

                    <p>3.2 <strong>Termination for Breach.</strong> Either party may terminate this Agreement if the other party breaches any material term or condition of this Agreement and fails to cure such breach within [Specify Cure Period] days after written notice of such breach.</p>

                    <p>3.3 <strong>Effect of Termination.</strong> Upon termination or expiration of this Agreement, Licensee shall cease all use of the Software and promptly return or destroy all copies of the Software in its possession.</p>

                    <h2>4. OWNERSHIP:</h2>

                    <p>4.1 <strong>Intellectual Property.</strong> Licensor retains all right, title, and interest in and to the Software, including all intellectual property rights.</p>

                    <h2>5. WARRANTIES AND DISCLAIMERS:</h2>

                    <p>5.1 <strong>Limited Warranty.</strong> Licensor warrants that the Software will perform substantially in accordance with the accompanying documentation for a period of [Specify Warranty Period] from the Effective Date.</p>

                    <p>5.2 <strong>Disclaimer.</strong> EXCEPT FOR THE LIMITED WARRANTY PROVIDED ABOVE, THE SOFTWARE IS PROVIDED "AS IS" AND LICENSOR MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.</p>

                    <h2>6. LIMITATION OF LIABILITY:</h2>

                    <p>6.1 <strong>Limitation of Liability.</strong> IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

                    <h2>7. MISCELLANEOUS:</h2>

                    <p>7.1 <strong>Governing Law.</strong> This Agreement shall be governed by and construed in accordance with the laws of [Specify Jurisdiction].</p>

                    <p>7.2 <strong>Entire Agreement.</strong> This Agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, understandings, or agreements, whether oral or written, relating to the subject matter hereof.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="yes">
                                    <input onChange={this.handleEvent} type="radio" id="yes" name='choice' value='1' /> Yes 
                                </label>&nbsp;
                                <label htmlFor="no">
                                    <input onChange={this.handleEvent} type="radio" id="no" name='choice' value='0' /> No 
                                </label>
                            </td>
                            <td width='50%' align="right">
                                <input type="button" onClick={this.displayMessage}  
                                disabled = {(this.state.isAgree == true) ? '' : 'disabled'}
                                className="btn btn-danger" value='download software' />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
export default Agreement