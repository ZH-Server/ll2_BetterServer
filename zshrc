# Echo
figlet -m block "Archlinux"|lolcat
echo "Keep it simple,stupid!"

# Plug
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
#source /usr/share/zsh/plugins/incr/incr.plugin.zsh

# Alias
alias system='neofetch|lolcat'
alias ls='colorls'
alias la='colorls -a'
alias ll='colorls -l'
alias vimrc='vim ~/.vimrc'
alias zshrc='vim ~/.zshrc'
alias upgrub="sudo update-grub"
alias fastgh="sudo fastgithub"

# Key Map
bindkey "\e[1~" beginning-of-line
bindkey "\e[4~" end-of-line
bindkey "\e[5~" beginning-of-history
bindkey "\e[6~" end-of-history
# rxvt
bindkey "\e[8~" end-of-line
bindkey "\e[7~" beginning-of-line
# for non RH/Debian xterm, can't hurt for RH/DEbian xterm
bindkey "\eOH" beginning-of-line
bindkey "\eOF" end-of-line
# for freebsd console
bindkey "\e[H" beginning-of-line
bindkey "\e[F" end-of-line
# completion in the middle of a line
bindkey '^i' expand-or-complete-prefix

# History
HSITSIZE=1024
export HIST_STAMPS="mm/dd/yyyy"
export SAVEHIST=$HISTSIZE
HISTFILE="$HOME/.zsh_history"
SAVEHIST=10000000
setopt BANG_HIST
setopt EXTENDED_HISTORY
setopt INC_APPEND_HISTORY
setopt SHARE_HISTORY
setopt HIST_EXPIRE_DUPS_FIRST
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_FIND_NO_DUPS
setopt HIST_IGNORE_SPACE
setopt HIST_SAVE_NO_DUPS
setopt HIST_REDUCE_BLANKS
setopt HIST_VERIFY
setopt HIST_BEEP

# Git
autoload -Uz compinit && compinit
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst
zstyle ':vcs_info:git:*' formats '%b'

# Prompt
PROMPT='%B%F{yellow}[%n]%f@%F{blue}[%m]%F{green}[%1~]%f%b> '
RPROMPT='%B%F{cyan}['\$vcs_info_msg_0_']%f%F{white}[%*][%D]%f%b'
