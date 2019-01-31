import React from 'react';
import { Upload, Icon, message } from 'antd';
import { base_url } from '../../Config/config';
import axios from 'axios';
const token = localStorage.getItem('token');

class MyUpload extends React.Component {
    state = {
        fileList: [],
    };
    // handleBeforeUpload = (file) => {
    //     console.log(file)
    //     const isJPG = file.type === 'image/jpeg';
    //     if (!isJPG) {
    //         message.error('You can only upload JPG/PNG file!');
    //     }
    //     const isPNG = file.type === 'image/png';
    //     if (!isPNG) {
    //         message.error('You can only upload JPG/PNG file!');
    //     }
    //     return false;
    // }
    handleImageUpload = ({ onSuccess, onError, file }) => {
        console.log(this.props)
        let formData = new FormData();
        formData.append('avatar', file);
        axios.post(`${base_url}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
                onSuccess()
                this.props.setAvatar(res.data)
            })
            .catch(err => {
                console.log(err)
                onError()
            })
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    render() {
        const { fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    customRequest={this.handleImageUpload}
                    listType="picture-card"
                    fileList={fileList}
                    // onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    // beforeUpload={this.handleBeforeUpload}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
            </div>
        );
    }
}

export default MyUpload;