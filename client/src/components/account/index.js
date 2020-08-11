/*
 * code for the skeleton of the settings page can be found here: https://github.com/dstuecken/react-settings-pane
 */

import React, { useContext, useEffect, useState } from "react";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu,
} from "react-settings-pane";
import { AuthContext } from "../session/withAuthentication";
import axios from "axios";
import "./style.css";
import app from "../firebase"

const AccountPage = (props) => {
  
  // console.log(currentUser);
  // let settings = {};
  const [settings, setSettings] = useState({});
  
    // app.auth().onAuthStateChanged((user) => {
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
      if(currentUser) {
        let url = "/users/" + currentUser.email;
        try {
          axios.get(url).then((res) => {
            if(!res) {
              alert("Unauthorized!");
            }
            setSettings({
              "mysettings.general.name": res.data[0].name,
              "mysettings.general.email": res.data[0].email,
              "mysettings.general.role": res.data[0].role,
              "mysettings.general.addressOne": res.data[0].addressOne,
              "mysettings.general.addressTwo": res.data[0].addressTwo,
              "mysettings.general.addressOne": res.data[0].addressOne,
              "mysettings.general.city": res.data[0].city,
              "mysettings.general.state": res.data[0].state,
              "mysettings.general.zip": res.data[0].zip,
              "mysettings.general.role": res.data[0].role,
              "mysettings.general.businessName": res.data[0].businessName,
              "mysettings.general.businessWebsite": res.data[0].businessWebsite
              // "mysettings.profile.firstname": "Nicholas",
              // "mysettings.profile.lastname": "Laughlin",
            });
          })
        }
        catch(error) {
          alert(error);
        }
      };
    }, []);
      
 
  
  
  // Define your menu
  const menu = [
    {
      title: "General", // Title that is displayed as text in the menu
      url: "/settings/general", // Identifier (url-slug)
    },
    // {
    //   title: "Profile",
    //   url: "/settings/profile",
    // },
  ];

  // Define one of your Settings pages
  const dynamicOptionsForProfilePage = [
    {
      key: "mysettings.general.email",
      label: "E-Mail address",
      type: "text",
    },
    {
      key: "mysettings.general.password",
      label: "Password",
      type: "password",
    },
  ];

  // Save settings after close
  const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
    }
  };

  const settingsChanged = (changedSettings) => {
    // this is triggered onChange of the inputs
  };

  // Return your Settings Pane
  return (
    <SettingsPane
      items={menu}
      index="/settings/general"
      settings={settings}
      onPaneLeave={leavePaneHandler}
      style={{marginTop: "10px"}}
    >
      <SettingsMenu headline="Settings" />
      <SettingsContent
        closeButtonClass="secondary"
        saveButtonClass="primary"
        header={true}
      >
        <SettingsPage handler="/settings/general">
          <fieldset className="form-group">
            <label htmlFor="profileName">Name: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.name"
              placeholder="Name"
              id="general.name"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.name"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">Email: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.email"
              placeholder="Email"
              id="general.email"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.email"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">Address: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.addressOne"
              placeholder="Address"
              id="general.addressOne"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.addressOne"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">Address 2: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.addressTwo"
              placeholder="Address 2"
              id="general.addressTwo"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.addressTwo"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">City: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.city"
              placeholder="City"
              id="general.city"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.city"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">State: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.state"
              placeholder="State"
              id="general.state"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.state"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileEmail">Zip Code: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.zip"
              placeholder="Zip"
              id="general.zip"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.zip"]}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="profileRole">Role: </label>
            <select defaultValue={settings["mysettings.general.role"]}>
              <option>Regular Customer</option>
              <option>Volunteer Handyman</option>
            </select>
          </fieldset>
          {settings["mysettings.general.role"] == "Volunteer Handyman" &&
          <fieldset className="form-group">
            <label htmlFor="profileEmail">Skill: </label>
            <input
              type="text"
              className="form-control"
              name="mysettings.general.skill"
              placeholder="Skill"
              id="general.skill"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.skill"]}
            />
          </fieldset>
          }
        </SettingsPage>
      </SettingsContent>
    </SettingsPane>
  );
};

export default AccountPage;
