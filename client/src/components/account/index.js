/*
 * code for the skeleton of the settings page can be found here: https://github.com/dstuecken/react-settings-pane
 */

import React, { useContext } from "react";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu,
} from "react-settings-pane";
import { AuthContext } from "../session/withAuthentication";
import "./style.css";

const AccountPage = () => {
  const { currentUser } = useContext(AuthContext);
  let settings = {
    "mysettings.general.name": "Nicholas Laughlin",
    "mysettings.general.email": "testing7@gmail.com",
    "mysettings.general.picture": "earth",
    "mysettings.profile.firstname": "Nicholas",
    "mysettings.profile.lastname": "Laughlin",
  };
  // Define your menu
  const menu = [
    {
      title: "General", // Title that is displayed as text in the menu
      url: "/settings/general", // Identifier (url-slug)
    },
    {
      title: "Profile",
      url: "/settings/profile",
    },
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
              id="general.ame"
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
              id="general.ame"
              onChange={settingsChanged}
              defaultValue={settings["mysettings.general.email"]}
            />
          </fieldset>
        </SettingsPage>
        <SettingsPage
          handler="/settings/profile"
          //   options={dynamicOptionsForProfilePage}
        >
          <fieldset className="form-group">
            <label htmlFor="profileRole">Role: </label>
            <select>
              <option>Regular user</option>
              <option>Volunteer Handyman</option>
              <option>Volunteer Driver</option>
            </select>
          </fieldset>
        </SettingsPage>
      </SettingsContent>
    </SettingsPane>
  );
};

export default AccountPage;
