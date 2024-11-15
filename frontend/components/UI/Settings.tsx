import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal';
import { Switch } from '@nextui-org/switch';
import { SunIcon } from './Elements/SunIcon';
import { MoonIcon } from './Elements/MoonIcon';
import { Button } from '@nextui-org/button';
import { SettingsProps } from '@/types';
import SelectLanguage from './SelectLanguage';

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const changeTheme = () => {
    const htmlTag = document.querySelector('html');

    htmlTag?.classList.toggle('light');
    htmlTag?.classList.toggle('dark');

    localStorage.setItem('theme', htmlTag?.classList.contains('light') ? 'light' : 'dark');
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} shadow="sm" backdrop="blur">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
              <ModalBody className="flex flex-col gap-3">
                <div className="settings__dark-theme">
                  <Switch
                    color="success"
                    size="lg"
                    startContent={<SunIcon />}
                    endContent={<MoonIcon />}
                    className="text-2xl font-bold"
                    onClick={changeTheme}
                  ></Switch>
                  <h3>Dark theme</h3>
                </div>
                <div className="settings__language">
                  Select Language
                  <SelectLanguage />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" onPress={onClose}>
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
