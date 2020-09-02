
# AutoMeet
A simple automation script for attending online lectures.

## Prerequisites
- node
- npm

##  Installation
Open a Terminal/ Command prompt and `ctrl+v` these codes one after the other.
 
- `git clone https://github.com/deprov447/AutoMeet.git`
- `cd AutoMeet`
- `npm install`


##  One time configuration
You should try manual configuration if having any problem.

### Through script
- `chmod +x config.sh`
- `./config.sh`


### Manual
- Open config.json in any text editor
- Set your browser name (`google-chrome` for chrome user)
- Setup the links, just don't disturb the subject names at this moment
- Save and exit



## Usage

Run `node master.js` in terminal, and done.


## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Some Issues
If your subjects or class schedule differs from those here, just edit the data.json and config.json files.
It is simple enough. Just replace, add, remove whatever unsuitable appears.
> - The "start" described in data.json is in 24hour format
> - Keep subject names **STRICTLY** same in both the files.

# Contribute :)
Check Issues tab.
